/**
 * Centralized Tailwind class strings for consistent UI across pages.
 * Import from here instead of duplicating long className strings.
 */

/** Home: large nav cards (Lesen / Hören) — link wrapper */
export const homeNavCardLinkClassName =
  "group relative flex flex-col items-start justify-between rounded-3xl border border-zinc-200 bg-white p-10 transition-all duration-500 hover:border-zinc-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden";

/** Home: circular icon container above card title */
export const homeNavCardIconWrapClassName =
  "mb-12 rounded-full bg-zinc-50 p-4 group-hover:bg-zinc-100 transition-colors";

/** Lesen / Hören teil listing: same visual language as home cards, with min height + focus ring for keyboard nav */
export const teilListingCardLinkClassName =
  "group relative flex min-h-55 flex-col items-start justify-between rounded-3xl border border-zinc-200 bg-white p-10 transition-all duration-500 hover:border-zinc-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export const cardHeadingClassName = "text-3xl font-semibold text-zinc-900 mb-2";

export const cardBodyTextClassName = "text-zinc-500";
