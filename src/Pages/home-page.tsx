import { Link } from "react-router-dom";
import { useTypewriter } from "./use-home-typewriter.ts";

function Typewriter({ text }: { text: string }) {
  const { displayText } = useTypewriter(text);

  return (
    <span className="relative inter-class">
      <span className="text-zinc-900">{displayText}</span>
      <span className="ml-1 inline-block w-[2px] h-[1em] bg-zinc-900 align-middle animate-[pulse_0.8s_infinite]"></span>
    </span>
  );
}

const Home = () => {
  return (
    <div className="h-full w-full py-12 sm:py-20 inter-class">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full max-w-3xl text-center mb-16 sm:mb-24">
          <h1 className="text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.1] min-h-[120px] sm:min-h-[80px]">
            <Typewriter text="Was möchtest du üben?" />
          </h1>
          <p className="mt-6 text-zinc-500 text-lg font-light tracking-tight max-w-md mx-auto">
            Verbessere dein Deutsch mit gezielten Übungen für das B1-Niveau.
          </p>
        </div>

        {/* Cards Grid - Sized up properly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
          <Link
            to="/lesen"
            className="group relative flex flex-col items-start justify-between rounded-3xl border border-zinc-200 bg-white p-10 transition-all duration-500 hover:border-zinc-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            <div className="mb-12 rounded-full bg-zinc-50 p-4 group-hover:bg-zinc-100 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-zinc-900"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-zinc-900 mb-2">
                Lesen
              </h2>
              <p className="text-zinc-500">
                Texte verstehen und Fragen beantworten.
              </p>
            </div>
          </Link>

          <Link
            to="/horen"
            className="group relative flex flex-col items-start justify-between rounded-3xl border border-zinc-200 bg-white p-10 transition-all duration-500 hover:border-zinc-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            <div className="mb-12 rounded-full bg-zinc-50 p-4 group-hover:bg-zinc-100 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-zinc-900"
              >
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-zinc-900 mb-2">
                Hören
              </h2>
              <p className="text-zinc-500">
                Hörverstehen trainieren mit Audiobeispielen.
              </p>
            </div>
          </Link>
        </div>

        {/* Fine-line footer decor */}
        <div className="mt-24 w-full max-w-xs h-[1px] bg-zinc-100 mx-auto" />
      </div>
    </div>
  );
};

export default Home;
