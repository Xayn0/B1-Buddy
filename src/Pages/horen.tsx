import { Link } from "react-router-dom";

const Horen = () => {
  const cardClassName =
    "group relative flex min-h-64 flex-col items-start justify-between rounded-3xl border border-zinc-200 bg-white p-10 transition-all duration-500 hover:border-zinc-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  return (
    <div className="min-h-[calc(100vh-4rem)] max-w-5xl mx-auto px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight text-center mb-10">
        Hören
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        <Link to="/horen-teil/1" className={cardClassName}>
          <h2 className="text-3xl font-semibold text-zinc-900 mb-2">horen-teil-1</h2>
          <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
        <Link to="/horen-teil/2" className={cardClassName}>
          <h2 className="text-3xl font-semibold text-zinc-900 mb-2">horen-teil-2</h2>
          <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
        <Link to="/horen-teil/3" className={cardClassName}>
          <h2 className="text-3xl font-semibold text-zinc-900 mb-2">horen-teil-3</h2>
          <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
        <Link to="/horen-teil/4" className={cardClassName}>
          <h2 className="text-3xl font-semibold text-zinc-900 mb-2">horen-teil-4</h2>
          <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
      </div>
    </div>
  );
};

export default Horen;