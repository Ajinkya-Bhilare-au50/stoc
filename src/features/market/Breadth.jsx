/** Advance/decline bar with counts. */
export default function Breadth({ breadth }) {
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
          <dd className="font-semibold tabular-nums text-market-muted">
            {unchanged.toLocaleString("en-IN")}
          </dd>
        </div>
        <div className="text-right">
          <dt className="text-xs text-market-subtle">Declines</dt>
          <dd className="font-semibold tabular-nums text-market-down">{declines.toLocaleString("en-IN")}</dd>
        </div>
      </dl>
    </div>
  );
}
