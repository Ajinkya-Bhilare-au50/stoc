/**
 * Height-animated disclosure using the CSS grid 0fr → 1fr trick: no JS
 * measuring, so it can't get stuck at a stale height, and it animates to the
 * content's natural size. Closed content is `inert` (not focusable/readable).
 */
export default function Collapse({ open, className = "", children, id }) {
  return (
    <div
      id={id}
      inert={!open}
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      } ${className}`}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}
