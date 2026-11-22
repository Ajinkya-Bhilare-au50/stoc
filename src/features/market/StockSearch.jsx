import { useDeferredValue, useId, useMemo, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const MAX_RESULTS = 8;

// Lower score = better match.
function score(symbol, name, q) {
  if (symbol === q) return 0;
  if (symbol.startsWith(q)) return 1;
  const upper = name.toUpperCase();
  if (upper.startsWith(q)) return 2;
  if (upper.includes(` ${q}`)) return 3; // a word in the name starts with it
  if (symbol.includes(q) || upper.includes(q)) return 4;
  return -1;
}

function search(symbols, query) {
  const q = query.trim().toUpperCase();
  if (!q) return [];
  const hits = [];
  for (const [symbol, name] of symbols) {
    const s = score(symbol, name, q);
    if (s >= 0) hits.push([s, symbol, name]);
  }
  hits.sort((a, b) => a[0] - b[0] || a[1].length - b[1].length || a[1].localeCompare(b[1]));
  return hits.slice(0, MAX_RESULTS).map(([, symbol, name]) => [symbol, name]);
}

/** ARIA combobox: type a symbol or company name, ↑/↓ to move, Enter to pick. */
export default function StockSearch({ symbols, onSelect, disabled }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const deferredQuery = useDeferredValue(query);
  const results = useMemo(() => search(symbols ?? [], deferredQuery), [symbols, deferredQuery]);
  const listId = useId();
  const inputRef = useRef(null);

  const choose = (symbol) => {
    onSelect(symbol);
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setHighlight((h) => Math.min(h + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter" && results[highlight]) {
      e.preventDefault();
      choose(results[highlight][0]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const showList = open && query.trim() !== "";

  return (
    <div className="relative w-full">
      <MagnifyingGlassIcon
        className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-market-subtle"
        aria-hidden
      />
      <input
        ref={inputRef}
        type="search"
        role="combobox"
        aria-expanded={showList}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={showList && results[highlight] ? `${listId}-${highlight}` : undefined}
        aria-label="Search NSE stocks by symbol or company name"
        placeholder={disabled ? "Loading stocks…" : "Search stock, e.g. RELIANCE or Infosys"}
        disabled={disabled}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setHighlight(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={onKeyDown}
        className="h-12 w-full rounded-xl border border-market-border bg-market-card pl-10 pr-4 text-sm text-market-text placeholder:text-market-subtle transition focus:border-market-accent focus:outline-none focus:ring-2 focus:ring-market-accent/30 disabled:opacity-60"
      />
      {showList && (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-30 mt-2 max-h-80 w-full overflow-auto rounded-xl border border-market-border bg-market-elevated p-1 shadow-2xl shadow-black/40"
        >
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-market-muted">No NSE equity matches “{query}”.</li>
          ) : (
            results.map(([symbol, name], i) => (
              <li
                key={symbol}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={i === highlight}
                onPointerDown={(e) => e.preventDefault()}
                onClick={() => choose(symbol)}
                onPointerEnter={() => setHighlight(i)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm ${
                  i === highlight ? "bg-market-accent/15" : ""
                }`}
              >
                <span className="font-semibold text-market-text">{symbol}</span>
                <span className="truncate text-right text-xs text-market-muted">{name}</span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
