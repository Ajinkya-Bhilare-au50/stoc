import { useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { formatCompact, formatDate, formatPrice } from "./format";

const HEIGHT = 300;
const PAD = { top: 16, right: 56, bottom: 28, left: 8 };
const VOLUME_SHARE = 0.18; // bottom part of the plot reserved for volume bars

function useWidth(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return width;
}

function niceTicks(min, max, count = 4) {
  const step = (max - min) / count;
  return Array.from({ length: count + 1 }, (_, i) => min + step * i);
}

/**
 * Close-price area chart with volume bars. Pointer/touch shows a crosshair;
 * when focused, ←/→ step through days. Colour follows the period's direction.
 */
export default function PriceChart({ data }) {
  const wrapRef = useRef(null);
  const width = useWidth(wrapRef);
  const [active, setActive] = useState(null);
  const gradientId = useId();

  const geo = useMemo(() => {
    if (!width || data.length < 2) return null;
    const plotW = width - PAD.left - PAD.right;
    const plotH = HEIGHT - PAD.top - PAD.bottom;
    const priceH = plotH * (1 - VOLUME_SHARE);
    const closes = data.map((d) => d.chartClose);
    let min = Math.min(...closes);
    let max = Math.max(...closes);
    const pad = (max - min) * 0.08 || max * 0.01;
    min -= pad;
    max += pad;
    const maxVol = Math.max(...data.map((d) => d.volume)) || 1;

    const x = (i) => PAD.left + (i / (data.length - 1)) * plotW;
    const y = (v) => PAD.top + (1 - (v - min) / (max - min)) * priceH;
    const line = data.map((d, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(d.chartClose).toFixed(1)}`).join("");
    const area = `${line}L${x(data.length - 1).toFixed(1)},${PAD.top + priceH}L${x(0).toFixed(1)},${PAD.top + priceH}Z`;
    const barW = Math.max(1, plotW / data.length - 1);
    const volTop = PAD.top + plotH * (1 - VOLUME_SHARE) + 4;
    const volH = plotH * VOLUME_SHARE - 4;
    const bars = data.map((d, i) => ({
      x: x(i) - barW / 2,
      y: volTop + volH * (1 - d.volume / maxVol),
      h: (volH * d.volume) / maxVol,
      up: i === 0 || d.chartClose >= data[i - 1].chartClose,
    }));
    // Evenly spaced date labels: fewer on narrow screens so they don't collide.
    const labelEvery = Math.max(1, Math.round(data.length / (width < 520 ? 3 : 5)));
    const dates = data
      .map((d, i) => ({ i, date: d.date }))
      .filter(({ i }) => i % labelEvery === 0 && i < data.length - labelEvery / 2);
    return { plotW, priceH, min, max, x, y, line, area, bars, barW, dates, ticks: niceTicks(min, max) };
  }, [width, data]);

  const up = data.length > 1 && data[data.length - 1].chartClose >= data[0].chartClose;
  const color = up ? "#22C55E" : "#EF4444"; // market-up / market-down tokens

  const pickIndex = (clientX) => {
    if (!geo) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const rel = (clientX - rect.left - PAD.left) / geo.plotW;
    setActive(Math.min(data.length - 1, Math.max(0, Math.round(rel * (data.length - 1)))));
  };

  const onKeyDown = (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    setActive((cur) => {
      const base = cur ?? data.length - 1;
      return Math.min(data.length - 1, Math.max(0, base + (e.key === "ArrowRight" ? 1 : -1)));
    });
  };

  const point = active != null ? data[active] : null;

  return (
    <div
      ref={wrapRef}
      className="relative w-full touch-pan-y select-none outline-none focus-visible:ring-2 focus-visible:ring-market-accent rounded-lg"
      style={{ height: HEIGHT }}
      tabIndex={0}
      role="img"
      aria-label={
        data.length
          ? `Price chart from ${formatDate(data[0].date)} to ${formatDate(data[data.length - 1].date)}. Use left and right arrow keys to inspect days.`
          : "Price chart"
      }
      onPointerMove={(e) => pickIndex(e.clientX)}
      onPointerDown={(e) => pickIndex(e.clientX)}
      onPointerLeave={() => setActive(null)}
      onKeyDown={onKeyDown}
      onBlur={() => setActive(null)}
    >
      {geo && (
        <svg width={width} height={HEIGHT} className="block" aria-hidden>
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.28" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>

          {geo.ticks.map((t) => (
            <g key={t}>
              <line
                x1={PAD.left}
                x2={PAD.left + geo.plotW}
                y1={geo.y(t)}
                y2={geo.y(t)}
                stroke="#293548"
                strokeDasharray="3 4"
              />
              <text x={width - PAD.right + 8} y={geo.y(t) + 4} fill="#64748B" fontSize="11">
                {formatPrice(t)}
              </text>
            </g>
          ))}

          {geo.bars.map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={b.y}
              width={geo.barW}
              height={b.h}
              fill={b.up ? "#22C55E" : "#EF4444"}
              opacity={active === i ? 0.8 : 0.35}
            />
          ))}

          <path d={geo.area} fill={`url(#${gradientId})`} />
          <path d={geo.line} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />

          {geo.dates.map(({ i, date }) => (
            <text
              key={date}
              x={geo.x(i)}
              y={HEIGHT - 8}
              fill="#64748B"
              fontSize="11"
              textAnchor={i === 0 ? "start" : "middle"}
            >
              {new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
            </text>
          ))}

          {point && (
            <g>
              <line
                x1={geo.x(active)}
                x2={geo.x(active)}
                y1={PAD.top}
                y2={HEIGHT - PAD.bottom}
                stroke="#94A3B8"
                strokeDasharray="4 4"
              />
              <circle cx={geo.x(active)} cy={geo.y(point.chartClose)} r="4.5" fill={color} stroke="#0B1220" strokeWidth="2" />
            </g>
          )}
        </svg>
      )}

      {point && geo && (
        <div
          className="pointer-events-none absolute top-2 rounded-lg border border-market-border bg-market-elevated/95 px-3 py-2 text-xs shadow-lg"
          style={
            geo.x(active) > width / 2
              ? { right: width - geo.x(active) + 12 }
              : { left: geo.x(active) + 12 }
          }
        >
          <p className="font-medium text-market-muted">{formatDate(point.date)}</p>
          <p className="mt-0.5 text-sm font-semibold tabular-nums text-market-text">₹{formatPrice(point.chartClose)}</p>
          <p className="tabular-nums text-market-subtle">Vol {formatCompact(point.volume)}</p>
        </div>
      )}
    </div>
  );
}
