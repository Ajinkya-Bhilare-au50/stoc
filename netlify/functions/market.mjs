/**
 * NSE market data API (Netlify Function, also mounted by the Vite dev server).
 *
 * Wraps TejHQ (https://api.tejhq.dev) so that:
 *  - the TEJ_API_KEY stays on the server (never shipped to browsers),
 *  - the 650 KB daily snapshot is reduced to a small summary once and cached
 *    at the CDN instead of being downloaded by every visitor,
 *  - only a fixed set of read-only routes is exposed (not an open proxy).
 *
 * Routes:
 *   GET /api/market/overview                -> movers, breadth, symbol index
 *   GET /api/market/stock/:SYMBOL?range=6m  -> price history, stats, actions, delivery
 *
 * TejHQ data is end-of-day (NSE bhavcopy), refreshed ~18:30 IST on trading days.
 */

const TEJ_BASE = "https://api.tejhq.dev";
const RANGES = { "1m": 31, "3m": 92, "6m": 183, "1y": 366, "5y": 1827 };
const SYMBOL_RE = /^[A-Z0-9&._-]{1,24}$/;
const MIN_TURNOVER_FOR_MOVERS = 1e7; // ₹1 crore: hides illiquid penny-stock noise
const MOVERS_COUNT = 10;

const json = (body, status = 200, cacheSeconds = 0) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": cacheSeconds ? `public, max-age=${Math.min(cacheSeconds, 300)}` : "no-store",
      // Netlify CDN: keep EOD data cached at the edge; refresh in the background.
      ...(cacheSeconds && {
        "netlify-cdn-cache-control": `public, durable, s-maxage=${cacheSeconds}, stale-while-revalidate=86400`,
      }),
    },
  });

class UpstreamError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

async function tej(path, { keyed = false } = {}) {
  const headers = { accept: "application/json" };
  const key = process.env.TEJ_API_KEY;
  if (keyed) {
    if (!key) return null; // feature unavailable without a key
    headers.authorization = `Bearer ${key}`;
  }
  const res = await fetch(TEJ_BASE + path, { headers });
  if (res.status === 404) return { data: [] };
  if (!res.ok) {
    // Keyed extras (delivery, adjusted) degrade gracefully on plan/auth errors.
    if (keyed && [401, 402, 403].includes(res.status)) return null;
    throw new UpstreamError(res.status, `TejHQ ${path} -> HTTP ${res.status}`);
  }
  return res.json();
}

const isoDaysAgo = (days, from = new Date()) =>
  new Date(from.getTime() - days * 86400000).toISOString().slice(0, 10);

const round2 = (n) => Math.round(n * 100) / 100;

function change(row) {
  const pct = row.prev_close ? ((row.close - row.prev_close) / row.prev_close) * 100 : 0;
  return { change: round2(row.close - row.prev_close), changePct: round2(pct) };
}

const mover = (r) => ({
  symbol: r.symbol,
  name: r.name,
  close: r.close,
  ...change(r),
  volume: r.volume,
  turnover: r.turnover,
});

async function overview() {
  const status = await tej("/v1/status");
  const date = status?.trading_date;
  if (!date) throw new UpstreamError(502, "TejHQ status has no trading_date");

  const snapshot = await tej(`/v1/snapshot/nse?date=${date}`);
  const equities = (snapshot.data ?? []).filter(
    (r) => r.series === "EQ" && r.prev_close > 0 && r.close > 0
  );

  let advances = 0;
  let declines = 0;
  let unchanged = 0;
  let turnover = 0;
  for (const r of equities) {
    if (r.close > r.prev_close) advances++;
    else if (r.close < r.prev_close) declines++;
    else unchanged++;
    turnover += r.turnover;
  }

  const liquid = equities.filter((r) => r.turnover >= MIN_TURNOVER_FOR_MOVERS).map(mover);
  const byPct = [...liquid].sort((a, b) => b.changePct - a.changePct);

  return {
    tradingDate: date,
    publishedAt: status.prices_published_at ?? null,
    breadth: { advances, declines, unchanged, total: equities.length },
    totalTurnover: Math.round(turnover),
    gainers: byPct.slice(0, MOVERS_COUNT),
    losers: byPct.slice(-MOVERS_COUNT).reverse(),
    mostActive: [...liquid].sort((a, b) => b.turnover - a.turnover).slice(0, MOVERS_COUNT),
    // Compact search index: [symbol, name]
    symbols: equities
      .map((r) => [r.symbol, r.name])
      .sort((a, b) => a[0].localeCompare(b[0])),
  };
}

async function stock(symbol, range) {
  const to = new Date();
  const from = isoDaysAgo(RANGES[range]);
  const yearAgo = isoDaysAgo(RANGES["1y"]);
  const sym = encodeURIComponent(symbol);
  // Always load ≥1y so 52-week high/low can be computed on the free tier.
  const historyFrom = from < yearAgo ? from : yearAgo;

  const [adjusted, ohlcv, actions, delivery] = await Promise.all([
    tej(`/v1/adjusted/nse/${sym}?from=${historyFrom}`, { keyed: true }),
    tej(`/v1/ohlcv/nse/${sym}?from=${historyFrom}`),
    tej(`/v1/actions/${sym}`),
    tej(`/v1/delivery/nse/${sym}?from=${isoDaysAgo(45, to)}`, { keyed: true }),
  ]);

  const raw = ohlcv?.data ?? [];
  if (!raw.length) return null;

  // Prefer split/bonus-adjusted closes for the chart when the key allows it.
  const adjByDate = new Map((adjusted?.data ?? []).map((r) => [r.date, r.adj_close]));
  const history = raw.map((r) => ({
    date: r.date,
    open: r.open,
    high: r.high,
    low: r.low,
    close: r.close,
    chartClose: adjByDate.get(r.date) ?? r.close,
    volume: r.volume,
  }));

  const latest = raw[raw.length - 1];
  const lastYear = raw.filter((r) => r.date >= yearAgo);
  const deliveryRows = (delivery?.data ?? []).filter((r) => r.delivery_pct != null);
  const recentDelivery = deliveryRows.slice(-20);

  return {
    symbol,
    adjusted: adjByDate.size > 0,
    latest: {
      date: latest.date,
      open: latest.open,
      high: latest.high,
      low: latest.low,
      close: latest.close,
      prevClose: latest.prev_close,
      ...change(latest),
      volume: latest.volume,
      turnover: latest.turnover,
      trades: latest.trades,
    },
    week52: {
      high: Math.max(...lastYear.map((r) => r.high)),
      low: Math.min(...lastYear.map((r) => r.low)),
    },
    history: history.filter((r) => r.date >= from),
    delivery: deliveryRows.length
      ? {
          latestPct: deliveryRows[deliveryRows.length - 1].delivery_pct,
          avg20Pct: round2(
            recentDelivery.reduce((s, r) => s + r.delivery_pct, 0) / recentDelivery.length
          ),
        }
      : null,
    actions: (actions?.data ?? [])
      .filter((a) => a.exchange === "NSE")
      .sort((a, b) => b.ex_date.localeCompare(a.ex_date))
      .slice(0, 8)
      .map((a) => ({
        exDate: a.ex_date,
        type: a.type,
        description: a.raw_subject,
      })),
  };
}

export default async function handler(request) {
  if (request.method !== "GET") return json({ error: "method_not_allowed" }, 405);
  const url = new URL(request.url);
  const parts = url.pathname.replace(/^\/api\/market\/?/, "").split("/").filter(Boolean);

  try {
    if (parts[0] === "overview" && parts.length === 1) {
      return json(await overview(), 200, 1800);
    }

    if (parts[0] === "stock" && parts.length === 2) {
      const symbol = decodeURIComponent(parts[1]).toUpperCase();
      const range = url.searchParams.get("range") ?? "6m";
      if (!SYMBOL_RE.test(symbol)) return json({ error: "invalid_symbol" }, 400);
      if (!RANGES[range]) return json({ error: "invalid_range" }, 400);
      const data = await stock(symbol, range);
      return data ? json(data, 200, 1800) : json({ error: "not_found" }, 404, 300);
    }

    return json({ error: "not_found" }, 404);
  } catch (error) {
    console.error(error);
    const status = error.status === 429 ? 429 : 502;
    return json({ error: status === 429 ? "rate_limited" : "upstream_error" }, status);
  }
}

export const config = { path: "/api/market/*" };
