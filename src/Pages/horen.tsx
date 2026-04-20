import { Link } from "react-router-dom";
import {
  cardBodyTextClassName,
  cardHeadingClassName,
  teilListingCardLinkClassName,
} from "../styles/tailwind-classes";

const Horen = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] max-w-5xl mx-auto px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight text-center mb-10">
        Hören
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        <Link to="/horen-teil/1" className={teilListingCardLinkClassName}>
          <h2 className={cardHeadingClassName}>Hören-teil-1</h2>
          <p className={cardBodyTextClassName}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
        <Link to="/horen-teil/2" className={teilListingCardLinkClassName}>
          <h2 className={cardHeadingClassName}>Hören-teil-2</h2>
          <p className={cardBodyTextClassName}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
        <Link to="/horen-teil/3" className={teilListingCardLinkClassName}>
          <h2 className={cardHeadingClassName}>Hören-teil-3</h2>
          <p className={cardBodyTextClassName}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
        <Link to="/horen-teil/4" className={teilListingCardLinkClassName}>
          <h2 className={cardHeadingClassName}>Hören-teil-4</h2>
          <p className={cardBodyTextClassName}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
      </div>
    </div>
  );
};

export default Horen;