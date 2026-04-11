import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import navItems, { linkClass, navItemsForMobile, type NavItem } from "./nav-items";



function RootLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-zinc-100 inter-class">
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <nav className="relative h-16 max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="font-semibold tracking-tighter text-xl text-zinc-900"
          >
            B1 <span className="text-zinc-400 font-normal">Buddy</span>
          </Link>

          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-zinc-500">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.to}
                to={item.to}
                className={linkClass(item, "desktop")}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="sm:hidden p-2 -mr-2 text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {mobileOpen && (
          <>
            <button
              type="button"
              aria-hidden
              tabIndex={-1}
              className="sm:hidden fixed inset-0 top-16 z-40 bg-zinc-900/20"
              onClick={() => setMobileOpen(false)}
            />
            <div
              id="mobile-nav"
              className="sm:hidden relative z-50 border-t border-zinc-100 bg-white px-6 py-2 shadow-lg"
            >
              {navItemsForMobile  (navItems).map((item: NavItem) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={linkClass(item, "mobile")}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </>
        )}
      </header>

      <main className="flex-1 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
