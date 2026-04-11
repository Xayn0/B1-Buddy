import { useEffect, useState } from "react";

export function useTypewriter(text: string) {
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
