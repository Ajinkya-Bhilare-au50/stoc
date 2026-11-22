const price = new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const compact = new Intl.NumberFormat("en-IN", { notation: "compact", maximumFractionDigits: 2 });
const integer = new Intl.NumberFormat("en-IN");

export const formatPrice = (n) => (n == null ? "—" : price.format(n));

export const formatChange = (n) => (n == null ? "—" : `${n > 0 ? "+" : ""}${price.format(n)}`);

export const formatPct = (n) => (n == null ? "—" : `${n > 0 ? "+" : ""}${n.toFixed(2)}%`);

/** Indian compact notation: 35.2L, 1.24Cr. */
export const formatCompact = (n) => (n == null ? "—" : compact.format(n));

const crore = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 });

/** Rupee values the way Indian market sites show them: ₹1,35,214 Cr, ₹707.13 Cr, ₹8.4 L. */
export const formatRupeesCompact = (n) => {
  if (n == null) return "—";
  if (n >= 1e9) return `₹${integer.format(Math.round(n / 1e7))} Cr`;
  if (n >= 1e7) return `₹${crore.format(n / 1e7)} Cr`;
  if (n >= 1e5) return `₹${crore.format(n / 1e5)} L`;
  return `₹${integer.format(Math.round(n))}`;
};

export const formatInteger = (n) => (n == null ? "—" : integer.format(n));

export const formatDate = (iso) =>
  iso
    ? new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

/** Text colour token for a signed value (trading convention: green up, red down). */
export const trendClass = (n) =>
  n > 0 ? "text-market-up" : n < 0 ? "text-market-down" : "text-market-muted";
