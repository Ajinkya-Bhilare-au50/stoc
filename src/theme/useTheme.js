import { useCallback, useSyncExternalStore } from "react";

/**
 * Site theme ("dark" | "light"). The initial value is applied before first
 * paint by an inline script in index.html; this hook keeps React in sync and
 * persists the user's choice.
 */
const STORAGE_KEY = "theme";
const EVENT = "themechange";
const META_COLOR = { dark: "#0B1220", light: "#F8FAFC" };

const read = () => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

function subscribe(callback) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

export function setTheme(theme) {
  const root = document.documentElement;
  // Animate colours only for user-initiated switches, then clean up.
  root.classList.add("theme-transition");
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", META_COLOR[theme]);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage blocked: theme still applies for this visit */
  }
  window.dispatchEvent(new Event(EVENT));
  window.setTimeout(() => root.classList.remove("theme-transition"), 250);
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, read, () => "dark");
  const toggle = useCallback(() => setTheme(read() === "dark" ? "light" : "dark"), []);
  return { theme, setTheme, toggle };
}
