import { useState } from "react";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import PriceChart from "./PriceChart";
import { stockUrl, useMarketApi } from "./useMarketApi";
import {
  formatChange,
  formatCompact,
  formatDate,
  formatInteger,
  formatPct,
  formatPrice,
  formatRupeesCompact,
  trendClass,
} from "./format";
import { Card, ErrorState, Skeleton } from "./ui";

const RANGES = [
  ["1m", "1M"],
  ["3m", "3M"],
  ["6m", "6M"],
  ["1y", "1Y"],
  ["5y", "5Y"],
];

function Stat({ label, value, hint }) {
  return (
    <div className="rounded-xl bg-market-panel/60 px-4 py-3">
      <dt className="text-xs font-medium text-market-subtle">{label}</dt>
      <dd className="mt-1 text-sm font-semibold tabular-nums text-market-text">{value}</dd>
      {hint && <dd className="mt-0.5 text-xs text-market-subtle">{hint}</dd>}
    </div>
  );
}

/** Where today's close sits inside the 52-week range. */
function RangeBar({ low, high, value }) {
  const pct = high > low ? Math.min(100, Math.max(0, ((value - low) / (high - low)) * 100)) : 50;
  return (
    <div>
      <div className="flex justify-between text-xs text-market-subtle">
        <span>52W low</span>
        <span>52W high</span>
      </div>
      <div className="relative mt-2 h-1.5 rounded-full bg-gradient-to-r from-market-down/60 via-market-warn/60 to-market-up/60">
        <span
          className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-market-bg bg-market-text"
          style={{ left: `${pct}%` }}
          aria-hidden
        />
      </div>
      <div className="mt-2 flex justify-between text-xs font-medium tabular-nums text-market-muted">
        <span>₹{formatPrice(low)}</span>
        <span>₹{formatPrice(high)}</span>
      </div>
    </div>
  );
}

const ACTION_STYLES = {
  dividend: "bg-market-up/10 text-market-up",
  split: "bg-market-cyan/10 text-market-cyan",
  bonus: "bg-market-accent/10 text-market-accent",
};

export default function StockDetail({ symbol, name }) {
  const [range, setRange] = useState("6m");
  const { data, error, loading, retry } = useMarketApi(stockUrl(symbol, range));

  if (error) {
    return (
      <Card>
        <ErrorState
          title={error.status === 404 ? `No NSE data for ${symbol}` : "Couldn't load this stock"}
          description={
            error.status === 404
              ? "It may be delisted or traded under a different symbol."
              : error.status === 429
                ? "Too many requests right now. Try again in a moment."
                : "The market data service didn't respond."
          }
          onRetry={error.status === 404 ? undefined : retry}
        />
      </Card>
    );
  }

  const latest = data?.latest;
  const Arrow = latest?.change >= 0 ? ArrowUpRightIcon : ArrowDownRightIcon;

  return (
    <Card aria-busy={loading}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-market-text">{symbol}</h2>
            <span className="rounded-md bg-market-elevated px-2 py-0.5 text-xs font-medium text-market-muted">
              NSE · EQ
            </span>
          </div>
          <p className="mt-1 truncate text-sm text-market-muted">{name ?? " "}</p>
        </div>
        {latest ? (
          <div className="sm:text-right">
            <p className="text-3xl font-bold tabular-nums tracking-tight text-market-text">
              ₹{formatPrice(latest.close)}
            </p>
            <p
              className={`mt-1 inline-flex items-center gap-1 text-sm font-semibold tabular-nums ${trendClass(latest.change)}`}
            >
              <Arrow className="h-4 w-4" aria-hidden />
              {formatChange(latest.change)} ({formatPct(latest.changePct)})
              <span className="font-normal text-market-subtle">· {formatDate(latest.date)}</span>
            </p>
          </div>
        ) : (
          <div className="space-y-2 sm:w-48">
            <Skeleton className="h-8 w-40 sm:ml-auto" />
            <Skeleton className="h-4 w-32 sm:ml-auto" />
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <div role="tablist" aria-label="Chart range" className="inline-flex rounded-lg bg-market-panel p-1">
          {RANGES.map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={range === value}
              onClick={() => setRange(value)}
              className={`min-w-[2.75rem] rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                range === value
                  ? "bg-market-accent text-white shadow"
                  : "text-market-muted hover:text-market-text"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {data && !data.adjusted && (
          <span
            className="hidden text-xs text-market-subtle sm:block"
            title="Prices are not adjusted for splits/bonuses"
          >
            Unadjusted prices
          </span>
        )}
      </div>

      <div className="mt-4">
        {data && !loading ? <PriceChart data={data.history} /> : <Skeleton className="h-[300px] w-full" />}
      </div>

      {latest && data && (
        <>
          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            <Stat label="Open" value={`₹${formatPrice(latest.open)}`} />
            <Stat label="Day high" value={`₹${formatPrice(latest.high)}`} />
            <Stat label="Day low" value={`₹${formatPrice(latest.low)}`} />
            <Stat label="Prev. close" value={`₹${formatPrice(latest.prevClose)}`} />
            <Stat label="Volume" value={formatCompact(latest.volume)} />
            <Stat label="Value traded" value={formatRupeesCompact(latest.turnover)} />
            <Stat label="Trades" value={formatInteger(latest.trades)} />
            {data.delivery ? (
              <Stat
                label="Delivery"
                value={`${data.delivery.latestPct.toFixed(1)}%`}
                hint={`20-day avg ${data.delivery.avg20Pct.toFixed(1)}%`}
              />
            ) : (
              <Stat label="52W high" value={`₹${formatPrice(data.week52.high)}`} />
            )}
          </dl>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-market-border p-4">
              <RangeBar low={data.week52.low} high={data.week52.high} value={latest.close} />
            </div>
            <div className="rounded-xl border border-market-border p-4">
              <h3 className="text-sm font-semibold text-market-text">Corporate actions</h3>
              {data.actions.length === 0 ? (
                <p className="mt-2 text-sm text-market-subtle">No recent corporate actions.</p>
              ) : (
                <ul className="mt-3 space-y-2.5">
                  {data.actions.slice(0, 4).map((a) => (
                    <li key={`${a.exDate}-${a.type}`} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold capitalize ${
                          ACTION_STYLES[a.type] ?? "bg-market-elevated text-market-muted"
                        }`}
                      >
                        {a.type}
                      </span>
                      <span className="min-w-0 flex-1 text-market-muted">{a.description}</span>
                      <span className="shrink-0 text-xs tabular-nums text-market-subtle">
                        {formatDate(a.exDate)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
