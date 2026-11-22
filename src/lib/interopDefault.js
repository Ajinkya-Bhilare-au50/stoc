/**
 * Some older CommonJS packages (react-slick, @ramonak/react-progress-bar)
 * compile to `exports.default = Component` with `__esModule: true`. Webpack
 * (Create React App) unwrapped that automatically; Vite can hand back the
 * whole `{ default: Component }` object, which makes React throw
 * "Element type is invalid ... got: object". Wrap such default imports.
 */
const isComponent = (value) =>
  typeof value === "function" || (typeof value === "object" && value !== null && "$$typeof" in value);

export const interopDefault = (mod) => (isComponent(mod) ? mod : (mod?.default ?? mod));
