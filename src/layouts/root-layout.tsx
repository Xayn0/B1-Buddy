import { Outlet, Link } from "react-router-dom";
import navItems, {
  linkClass,
  navItemsForMobile,
  useNav,
  type NavItem,
} from "./nav-items";
import { useTheme } from "../theme/theme-provider";

function RootLayout() {
  const { isOpen, toggle, close } = useNav();
  const { theme, setTheme } = useTheme();
  const themeLabel =
    theme === "dark" ? "Dunkel" : theme === "light" ? "Hell" : "System";

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-zinc-100 inter-class dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-zinc-800">
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="relative h-16 max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* JUST LOGO */}
          <Link
            to="/"
            className="font-semibold tracking-tighter text-xl text-zinc-900 dark:text-zinc-100"
          >
            B1{" "}
            <span className="text-zinc-400 font-normal dark:text-zinc-500">
              Buddy
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.to}
                to={item.to}
                className={linkClass(item, "desktop")}
              >
                {item.name}
              </Link>
            ))}
            <button
              type="button"
              className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              onClick={() =>
                setTheme(
                  theme === "dark" ? "light" : "dark",
                )
              }
              aria-label={`Theme wechseln. Aktuell: ${themeLabel}`}
              title={`Theme: ${themeLabel}`}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>

          <button
            type="button"
            className="sm:hidden p-2 -mr-2 text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors dark:text-zinc-100 dark:hover:bg-zinc-800"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={toggle}
          >
            {isOpen ? (
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

        {isOpen && (
          <div
            id="mobile-nav"
            className="sm:hidden relative z-50 border-t border-zinc-100 bg-white px-6 py-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
          >
            <button
              type="button"
              className="mb-2 w-full rounded-md border border-zinc-200 px-3 py-2 text-left text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              onClick={() =>
                setTheme(
                  theme === "dark" ? "light" : "dark",
                )
              }
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            {navItemsForMobile(navItems).map((item: NavItem) => (
              <Link
                key={item.to}
                to={item.to}
                className={linkClass(item, "mobile")}
                onClick={close}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px] opacity-40 dark:bg-zinc-950 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]"></div>
        <Outlet />
      </main>

      {/* Rendered outside header so `fixed` covers the viewport (backdrop-blur on header traps fixed descendants). */}
      {isOpen && (
        <button
          type="button"
          aria-hidden
          tabIndex={-1}
          className="sm:hidden fixed inset-0 top-16 z-40 cursor-pointer border-0 bg-zinc-900/20 p-0 dark:bg-black/40"
          onClick={close}
        />
      )}
    </div>
  );
}

export default RootLayout;
