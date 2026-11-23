import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "./useTheme";

/** Sun/moon button. `withLabel` shows text (used in the mobile menu). */
export default function ThemeToggle({ withLabel = false, className = "" }) {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? SunIcon : MoonIcon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={
        withLabel
          ? `btn btn-secondary w-full justify-start ${className}`
          : `btn btn-ghost h-10 w-10 px-0 ${className}`
      }
    >
      <Icon className="h-5 w-5" aria-hidden />
      {withLabel && <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>}
    </button>
  );
}
