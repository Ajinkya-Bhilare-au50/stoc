import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ROUTES } from "../../config/routes";
import { overviewUrl, useMarketApi } from "./useMarketApi";
import { formatDate, formatPct, formatPrice, formatRupeesCompact, trendClass } from "./format";
import Breadth from "./Breadth";
import { Skeleton } from "./ui";

const LISTS = [
  { key: "gainers", label: "Top gainers" },
  { key: "losers", label: "Top losers" },
  { key: "mostActive", label: "Most active" },
];
const ROWS = 3;

const stockLink = (symbol) => `${ROUTES.nseStocks}?symbol=${encodeURIComponent(symbol)}`;

function MoverList({ rows, kind }) {
  return (
    <ul className="divide-y divide-market-border/60">
      {rows.slice(0, ROWS).map((r) => (
        <li key={r.symbol}>
          <Link
            to={stockLink(r.symbol)}
            className="-mx-2 flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-market-elevated/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-market-accent"
          >
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-market-text">{r.symbol}</span>
              <span className="block text-xs tabular-nums text-market-subtle">₹{formatPrice(r.close)}</span>
            </span>
            <span className="shrink-0 text-right text-sm font-semibold tabular-nums">
              {kind === "mostActive" ? (
                <>
                  <span className="block text-market-text">{formatRupeesCompact(r.turnover)}</span>
                  <span className={`block text-xs ${trendClass(r.changePct)}`}>{formatPct(r.changePct)}</span>
                </>
              ) : (
                <span className={trendClass(r.changePct)}>{formatPct(r.changePct)}</span>
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Compact end-of-day market summary for the home page. Shares the cached
 * /api/market/overview response with the NSE page, so it adds no API calls.
 * Renders nothing if market data is unavailable (the home page shouldn't
 * show an error block for an optional widget).
 */
export default function HomeMarketSnapshot() {
  const { data, error } = useMarketApi(overviewUrl);
  if (error) return null;

  return (
    <section aria-labelledby="market-today" className="bg-market-bg px-4 py-12 text-market-text sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-market-cyan">NSE · Market today</p>
            <h2 id="market-today" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              How the market closed
            </h2>
            <p className="mt-1 flex items-center gap-2 text-sm text-market-muted">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-market-border bg-market-card px-2.5 py-0.5 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-market-warn" aria-hidden />
                End of day
              </span>
              {data ? formatDate(data.tradingDate) : <Skeleton className="h-4 w-24" />}
            </p>
          </div>
          <Link
            to={ROUTES.nseStocks}
            className="inline-flex h-10 items-center gap-2 self-start rounded-lg border border-market-border bg-market-card px-4 text-sm font-semibold text-market-text transition hover:border-market-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-market-accent sm:self-auto"
          >
            View full market
            <ArrowRightIcon className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-6 rounded-2xl border border-market-border bg-market-card p-4 sm:p-6">
          {data ? <Breadth breadth={data.breadth} /> : <Skeleton className="h-16 w-full" />}

          <div className="mt-6 grid gap-6 border-t border-market-border pt-6 sm:grid-cols-3 sm:gap-8">
            {LISTS.map(({ key, label }) => (
              <div key={key}>
                <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-market-subtle">{label}</h3>
                {data ? (
                  <MoverList rows={data[key]} kind={key} />
                ) : (
                  <div className="space-y-2 pt-2">
                    {Array.from({ length: ROWS }, (_, i) => (
                      <Skeleton key={i} className="h-10 w-full" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
