import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 20,
  onComplete,
  onUpdate,
  showCursor,
  formatter,
  audioRef
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    const audio = audioRef?.current;

    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((err) => {
        console.error("Typing audio failed:", err);
      });
    }

    const interval = setInterval(() => {
      i++;

      const newText = text.slice(0, i);
      setDisplayed(newText);

      if (onUpdate) onUpdate();

      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);

        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }

        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      }
    }, speed);

    return () => {
      clearInterval(interval);

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [text, speed, onComplete, onUpdate, audioRef]);

  return (
    <div style={{ minHeight: "1em" }}>
      {formatter ? formatter(displayed) : displayed}
      {done && showCursor && <span className="cursor">|</span>}
    </div>
  );
}