"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const tryStart = () => {
      if (startedRef.current) return;
      audioRef.current
        ?.play()
        .then(() => {
          startedRef.current = true;
        })
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

  return <audio ref={audioRef} src={src} loop />;
}
