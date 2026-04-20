import { Link } from "react-router-dom";
import {
  cardBodyTextClassName,
  cardHeadingClassName,
  homeNavCardIconWrapClassName,
  homeNavCardLinkClassName,
} from "../styles/tailwind-classes";
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
          <Link to="/lesen" className={homeNavCardLinkClassName}>
            <div className={homeNavCardIconWrapClassName}>
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
              <h2 className={cardHeadingClassName}>Lesen</h2>
              <p className={cardBodyTextClassName}>
                Texte verstehen und Fragen beantworten.
              </p>
            </div>
          </Link>

          <Link to="/horen" className={homeNavCardLinkClassName}>
            <div className={homeNavCardIconWrapClassName}>
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
              <h2 className={cardHeadingClassName}>Hören</h2>
              <p className={cardBodyTextClassName}>
                Hörverstehen trainieren mit Audiobeispielen.
              </p>
            </div>
          </Link>
        </div>

        {/* Fine-line footer decor */}
        <div className="mt-24 w-full max-w-xs h-px bg-zinc-100 mx-auto" />
      </div>
    </div>
  );
};

export default Home;
