import { useState } from "react";
import { formatPct, formatPrice, formatRupeesCompact, trendClass } from "./format";
import { Card, Skeleton } from "./ui";

const TABS = [
  { key: "gainers", label: "Top gainers", metric: "change" },
  { key: "losers", label: "Top losers", metric: "change" },
  { key: "mostActive", label: "Most active", metric: "turnover" },
];

function MoverTable({ rows, metric, onSelect, selected }) {
  return (
    <table className="w-full table-fixed text-sm">
      {/* Fixed widths keep symbols readable instead of letting prices squeeze them. */}
      <colgroup>
        <col className="w-[48%]" />
        <col className="w-[28%]" />
        <col className="w-[24%]" />
      </colgroup>
      <thead>
        <tr className="text-left text-xs font-medium text-market-subtle">
          <th scope="col" className="pb-2 font-medium">
            Stock
          </th>
          <th scope="col" className="pb-2 text-right font-medium">
            Price
          </th>
          <th scope="col" className="pb-2 text-right font-medium">
            {metric === "turnover" ? "Value" : "Change"}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr
            key={r.symbol}
            onClick={() => onSelect(r.symbol)}
            className={`cursor-pointer border-t border-market-border/60 transition-colors hover:bg-market-elevated/60 ${
              selected === r.symbol ? "bg-market-accent/10" : ""
            }`}
          >
            <td className="py-2.5 pr-2">
              {/* Real button for keyboard/screen-reader users; the row click is a mouse shortcut. */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(r.symbol);
                }}
                className="block w-full truncate text-left font-semibold text-market-text hover:text-market-accent focus:outline-none focus-visible:text-market-accent"
              >
                {r.symbol}
              </button>
              <span className="block truncate text-xs text-market-subtle">{r.name}</span>
            </td>
            <td className="whitespace-nowrap py-2.5 text-right tabular-nums text-market-text">
              ₹{formatPrice(r.close)}
            </td>
            <td className="whitespace-nowrap py-2.5 pl-3 text-right tabular-nums">
              {metric === "turnover" ? (
                <span className="text-market-text">{formatRupeesCompact(r.turnover)}</span>
              ) : null}
              <span
                className={`block text-xs font-semibold ${trendClass(r.changePct)} ${metric === "turnover" ? "" : "text-sm"}`}
              >
                {formatPct(r.changePct)}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function PanelSkeleton() {
  return (
    <div className="space-y-3 pt-2">
      {Array.from({ length: 6 }, (_, i) => (
        <Skeleton key={i} className="h-10 w-full" />
      ))}
    </div>
  );
}

/**
 * Desktop: three columns side by side. Mobile/tablet: one panel with tabs,
 * so the tables stay readable instead of being squeezed.
 */
export default function MoversPanel({ data, onSelect, selected }) {
  const [tab, setTab] = useState("gainers");

  return (
    <>
      <Card className="lg:hidden">
        <div
          role="tablist"
          aria-label="Market movers"
          className="grid grid-cols-3 gap-1 rounded-lg bg-market-panel p-1"
        >
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-md px-2 py-2 text-xs font-semibold transition ${
                tab === t.key ? "bg-market-elevated text-market-text shadow" : "text-market-muted"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-3">
          {data ? (
            <MoverTable
              rows={data[tab]}
              metric={TABS.find((t) => t.key === tab).metric}
              onSelect={onSelect}
              selected={selected}
            />
          ) : (
            <PanelSkeleton />
          )}
        </div>
      </Card>

      <div className="hidden gap-6 lg:grid lg:grid-cols-3">
        {TABS.map((t) => (
          <Card key={t.key}>
            <h2 className="mb-3 text-base font-semibold text-market-text">{t.label}</h2>
            {data ? (
              <MoverTable rows={data[t.key]} metric={t.metric} onSelect={onSelect} selected={selected} />
            ) : (
              <PanelSkeleton />
            )}
          </Card>
        ))}
      </div>
    </>
  );
}
