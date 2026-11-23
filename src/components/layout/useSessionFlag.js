import { useCallback, useState } from "react";

/** Boolean remembered for the browser tab session (e.g. "promo dismissed"). */
export function useSessionFlag(key) {
  const [value, setValue] = useState(() => {
    try {
      return sessionStorage.getItem(key) === "1";
    } catch {
      return false;
    }
  });
  const set = useCallback(() => {
    setValue(true);
    try {
      sessionStorage.setItem(key, "1");
    } catch {
      /* storage blocked: keep in memory only */
    }
  }, [key]);
  return [value, set];
}
