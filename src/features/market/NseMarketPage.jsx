import { useMemo, useRef } from "react";
import { useSearchParams } from "react-router";
import { overviewUrl, useMarketApi } from "./useMarketApi";
import { formatDate, formatRupeesCompact } from "./format";
import MoversPanel from "./MoversPanel";
import StockDetail from "./StockDetail";
import StockSearch from "./StockSearch";
import { Card, ErrorState, Skeleton } from "./ui";

function Breadth({ breadth }) {
  const { advances, declines, unchanged, total } = breadth;
  const pct = (n) => `${((n / total) * 100).toFixed(1)}%`;
  return (
    <div>
      <div className="flex h-2 overflow-hidden rounded-full bg-market-elevated" aria-hidden>
        <span className="bg-market-up" style={{ width: pct(advances) }} />
        <span className="bg-market-subtle" style={{ width: pct(unchanged) }} />
        <span className="bg-market-down" style={{ width: pct(declines) }} />
      </div>
      <dl className="mt-3 grid grid-cols-3 text-sm">
        <div>
          <dt className="text-xs text-market-subtle">Advances</dt>
          <dd className="font-semibold tabular-nums text-market-up">{advances.toLocaleString("en-IN")}</dd>
        </div>
        <div className="text-center">
          <dt className="text-xs text-market-subtle">Unchanged</dt>
          <dd className="font-semibold tabular-nums text-market-muted">{unchanged.toLocaleString("en-IN")}</dd>
        </div>
        <div className="text-right">
          <dt className="text-xs text-market-subtle">Declines</dt>
          <dd className="font-semibold tabular-nums text-market-down">{declines.toLocaleString("en-IN")}</dd>
        </div>
      </dl>
    </div>
  );
}

export default function NseMarketPage() {
  const { data, error, loading, retry } = useMarketApi(overviewUrl);
  const [params, setParams] = useSearchParams();
  const detailRef = useRef(null);

  const names = useMemo(() => new Map(data?.symbols ?? []), [data]);
  // Selected stock lives in the URL (?symbol=TCS) so it's shareable and survives reloads.
  const selected = (params.get("symbol") || data?.mostActive?.[0]?.symbol || "").toUpperCase();

  const select = (symbol) => {
    setParams({ symbol }, { replace: true, preventScrollReset: true });
    // Bring the chart into view on small screens where it's above the fold no longer.
    requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <div className="min-h-screen bg-market-bg text-market-text">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
        {/* Header */}
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-market-cyan">NSE · Equities</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Market overview</h1>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-market-muted">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-market-border bg-market-card px-2.5 py-0.5 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-market-warn" aria-hidden />
                End of day
              </span>
              {data ? (
                <span>Closing prices for {formatDate(data.tradingDate)}</span>
              ) : (
                <Skeleton className="h-4 w-40" />
              )}
            </p>
          </div>
          <div className="w-full lg:max-w-md">
            <StockSearch symbols={data?.symbols} onSelect={select} disabled={!data} />
          </div>
        </header>

        {error ? (
          <Card className="mt-8">
            <ErrorState
              title="Market data is unavailable"
              description={
                error.status === 429
                  ? "We're getting too many requests. Please try again in a minute."
                  : "We couldn't reach the market data service. Please try again."
              }
              onRetry={retry}
            />
          </Card>
        ) : (
          <>
            {/* Summary strip */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2">
                <h2 className="mb-4 text-sm font-semibold text-market-muted">Market breadth</h2>
                {data ? <Breadth breadth={data.breadth} /> : <Skeleton className="h-16 w-full" />}
              </Card>
              <Card>
                <h2 className="text-sm font-semibold text-market-muted">Total value traded</h2>
                {data ? (
                  <>
                    <p className="mt-3 text-3xl font-bold tabular-nums">{formatRupeesCompact(data.totalTurnover)}</p>
                    <p className="mt-1 text-xs text-market-subtle">
                      Across {data.breadth.total.toLocaleString("en-IN")} EQ-series stocks
                    </p>
                  </>
                ) : (
                  <Skeleton className="mt-3 h-10 w-36" />
                )}
              </Card>
            </div>

            {/* Selected stock */}
            <div ref={detailRef} className="mt-6 scroll-mt-24">
              {selected ? (
                <StockDetail key={selected} symbol={selected} name={names.get(selected)} />
              ) : (
                <Card>
                  <Skeleton className="h-[420px] w-full" />
                </Card>
              )}
            </div>

            {/* Movers */}
            <div className="mt-6">
              <MoversPanel data={loading ? null : data} onSelect={select} selected={selected} />
            </div>
          </>
        )}

        <p className="mt-10 text-center text-xs leading-relaxed text-market-subtle">
          End-of-day data from NSE bhavcopy via{" "}
          <a href="https://tejhq.dev" target="_blank" rel="noreferrer" className="underline hover:text-market-muted">
            TejHQ
          </a>
          , updated after market close (~6:30 PM IST). For education only — not investment advice.
        </p>
      </div>
    </div>
  );
}
