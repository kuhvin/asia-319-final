import { useEffect, useState, useRef } from "react";

export default function Typewriter({
  text,
  speed = 20,
  onComplete,
  onUpdate,
  showCursor,
  formatter
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const audioRef = useRef(null);

  // 🎬 Typing logic
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    if (!audioRef.current) {
        audioRef.current = new Audio("https://kuhvin.github.io/asia-319-final/typing.mp3");
        audioRef.current.volume = 0.12;
    }

    // ▶️ start audio
    audioRef.current.play().catch(() => {});

    const interval = setInterval(() => {
        i++;

        const newText = text.slice(0, i);
        setDisplayed(newText);

        if (onUpdate) onUpdate();

        if (i >= text.length) {
        clearInterval(interval);
        setDone(true);

        // ⏸ stop audio
        if (audioRef.current) {
            audioRef.current.pause();
        }

        setTimeout(() => {
            if (onComplete) onComplete();
        }, 300);
        }
    }, speed);

    return () => {
        clearInterval(interval);

        // 🔥 CRITICAL: ALWAYS stop audio on cleanup
        if (audioRef.current) {
        audioRef.current.pause();
        }
    };
    }, [text]);

  return (
    <div style={{ minHeight: "1em" }}>
      {formatter ? formatter(displayed) : displayed}
      {done && showCursor && <span className="cursor">|</span>}
    </div>
  );
}