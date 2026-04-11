import { useCallback, useState } from "react";

export type NavItem = {
  to: string;
  name: string;
  /** Profil-style pill on desktop only */
  variant?: "pill";
};

const navItems: NavItem[] = [
  { to: "/lesen", name: "Lesen" },
  { to: "/horen", name: "Hören" },
  { to: "/contact", name: "Contact Us" },
  { to: "/profile", name: "Profil", variant: "pill" },
];

export function linkClass(item: NavItem, mode: "desktop" | "mobile") {
  const pill =
    "px-4 py-1.5 rounded-full border border-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-all text-center";
  const defaultDesktop = "hover:text-zinc-900 transition-colors";
  const defaultMobile =
    "block py-3 text-base font-medium text-zinc-700 hover:text-zinc-900 border-b border-zinc-100 last:border-b-0";

  if (mode === "mobile") {
    return defaultMobile;
  }
  if (item.variant === "pill") {
    return pill;
  }
  return defaultDesktop;
}

export function navItemsForMobile(items: NavItem[]): NavItem[] {
  const profile = items.find((i) => i.to === "/profile");
  const rest = items.filter((i) => i.to !== "/profile");
  return profile ? [profile, ...rest] : items;
}

export function useNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((o) => !o);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, toggle, open, close };
}

export default navItems;
