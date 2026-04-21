import { useEffect, useState } from "react";

function useTypewriter(text: string) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, displayText.length + 1));
        setSpeed(100);
      } else {
        setDisplayText(text.substring(0, displayText.length - 1));
        setSpeed(40);
      }

      if (!isDeleting && displayText === text) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, speed, text]);

  return { displayText };
}

export function Typewriter({ text }: { text: string }) {
  const { displayText } = useTypewriter(text);

  return (
    <span className="relative inter-class">
      <span className="text-zinc-900 dark:text-zinc-100">{displayText}</span>
      <span className="ml-1 inline-block w-[2px] h-[1em] bg-zinc-900 align-middle animate-[pulse_0.8s_infinite] dark:bg-zinc-100"></span>
    </span>
  );
}
