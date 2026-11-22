import { useCallback, useEffect, useId, useRef, useState } from "react";

const ALIGN = {
  start: "left-0",
  end: "right-0",
  center: "left-1/2 -translate-x-1/2",
};

/**
 * Small accessible dropdown (no positioning library needed for a navbar).
 * - click / Enter / Space toggles; optional hover-to-open on pointer devices
 * - closes on Escape (focus returns to the trigger), outside click,
 *   focus leaving, or activating a link/button inside the panel
 * - the panel sits inside the hover zone (pt-2 "bridge"), so moving the
 *   pointer diagonally into it doesn't close it
 *
 * `trigger` is a render function: ({ open, props }) => <button {...props} />
 */
export default function Dropdown({
  trigger,
  children,
  align = "start",
  openOnHover = false,
  panelClassName = "",
  label,
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const closeTimer = useRef();
  const openedByHover = useRef(false);
  const panelId = useId();

  const close = useCallback((focusTrigger = false) => {
    setOpen(false);
    if (focusTrigger) triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) close();
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") close(true);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const hoverProps = openOnHover
    ? {
        onPointerEnter: (e) => {
          if (e.pointerType !== "mouse") return;
          clearTimeout(closeTimer.current);
          if (!open) openedByHover.current = true;
          setOpen(true);
        },
        onPointerLeave: (e) => {
          if (e.pointerType !== "mouse") return;
          openedByHover.current = false;
          closeTimer.current = setTimeout(() => setOpen(false), 150);
        },
      }
    : {};

  return (
    <div
      ref={rootRef}
      className="relative"
      {...hoverProps}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget)) close();
      }}
    >
      {trigger({
        open,
        props: {
          ref: triggerRef,
          type: "button",
          "aria-haspopup": "true",
          "aria-expanded": open,
          "aria-controls": panelId,
          onClick: () => {
            // A mouse user who hovered (opening the menu) and then clicks
            // expects it to stay open, not toggle shut.
            if (openedByHover.current) {
              openedByHover.current = false;
              return;
            }
            setOpen((cur) => !cur);
          },
        },
      })}
      <div
        id={panelId}
        role="region"
        aria-label={label}
        hidden={!open}
        onClick={(e) => {
          if (e.target.closest("a, button")) close();
        }}
        className={`absolute top-full z-50 pt-2 ${ALIGN[align]}`}
      >
        <div
          className={`rounded-xl border border-gray-100 bg-white shadow-xl shadow-gray-900/10 ${panelClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
