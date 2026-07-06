"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicToggle({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const userPausedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryStart = () => {
      if (userPausedRef.current || !audio.paused) return;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // blocked — will retry on next interaction automatically
        });
    };

    tryStart();
    document.addEventListener("touchstart", tryStart, { passive: true });
    document.addEventListener("click", tryStart);

    return () => {
      document.removeEventListener("touchstart", tryStart);
      document.removeEventListener("click", tryStart);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      userPausedRef.current = false;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      userPausedRef.current = true;
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Անջատել երաժշտությունը" : "Միացնել երաժշտությունը"}
        className="fixed right-4 top-[max(1rem,env(safe-area-inset-top))] z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-cream/25 bg-night/40 text-cream backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-night/60 active:scale-95"
      >
        {playing && (
          <span
            className="pointer-events-none absolute inset-0 animate-pulse-soft rounded-full border border-champagne/60 motion-reduce:animate-none motion-reduce:opacity-0"
            aria-hidden
          />
        )}
        {playing ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
            <path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4Z" />
            <path
              d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
            <path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4Z" />
            <path
              d="m16.5 9.5 5 5m0-5-5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </>
  );
}
