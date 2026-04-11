import { Outlet, Link } from "react-router-dom";
import navItems, { type NavItem } from "./nav-items";
function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-zinc-100 inter-class">
      {/* Header */}
      <header className="sticky top-0 z-50 h-16 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <nav className="h-full max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="font-semibold tracking-tighter text-xl text-zinc-900"
          >
            B1 <span className="text-zinc-400 font-normal">Buddy</span>
          </Link>

          {/* NAV */}
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-zinc-500">
            {navItems.map((item: NavItem) => {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="hover:text-zinc-900 transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              to="/profile"
              className="px-4 py-1.5 rounded-full border border-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-all"
            >
              Profil
            </Link>
          </div>

          {/* Mobile Menu Icon (Placeholder) */}
          <div className="sm:hidden text-zinc-900">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              cursor={"pointer"}
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </nav>
      </header>

      <main className="flex-1 relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
