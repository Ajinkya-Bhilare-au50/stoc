import { Outlet, ScrollRestoration } from "react-router";
import AuthProvider from "../auth/AuthProvider";

// Block copying page content (existing business rule), but never inside form
// fields, so users can still copy what they typed.
const blockCopy = (event) => {
  if (event.target.closest?.("input, textarea, [contenteditable='true']")) return;
  event.preventDefault();
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <div onCopy={blockCopy}>
        <Outlet />
      </div>
      <ScrollRestoration />
    </AuthProvider>
  );
}
