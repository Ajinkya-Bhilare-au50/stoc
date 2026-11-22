import { useCallback, useEffect, useState } from "react";

// Session cache: EOD data doesn't change while the page is open, so moving
// between stocks/ranges is instant after the first load.
const cache = new Map();

export class MarketApiError extends Error {
  constructor(status, code) {
    super(code || `HTTP ${status}`);
    this.status = status;
    this.code = code;
  }
}

async function getJson(url, signal) {
  const res = await fetch(url, { signal, headers: { accept: "application/json" } });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new MarketApiError(res.status, body.error);
  return body;
}

/** Fetch `url` (null = skip). Returns { data, error, loading, retry }. */
export function useMarketApi(url) {
  const [state, setState] = useState(() => ({
    data: url ? cache.get(url) : undefined,
    error: null,
    loading: Boolean(url && !cache.has(url)),
  }));
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!url) return undefined;
    if (cache.has(url)) {
      setState({ data: cache.get(url), error: null, loading: false });
      return undefined;
    }
    const controller = new AbortController();
    setState((s) => ({ data: s.data, error: null, loading: true }));
    getJson(url, controller.signal)
      .then((data) => {
        cache.set(url, data);
        setState({ data, error: null, loading: false });
      })
      .catch((error) => {
        if (error.name === "AbortError") return;
        setState({ data: undefined, error, loading: false });
      });
    return () => controller.abort();
  }, [url, attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);
  return { ...state, retry };
}

export const overviewUrl = "/api/market/overview";
export const stockUrl = (symbol, range) =>
  `/api/market/stock/${encodeURIComponent(symbol)}?range=${range}`;
