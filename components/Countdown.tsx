"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const WEDDING_DATE = new Date("2026-08-16T11:00:00").getTime();

type TimeLeft = {
  days: string;
  hours: string;
  mins: string;
  secs: string;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE - Date.now();

  if (diff <= 0) {
    return { days: "00", hours: "00", mins: "00", secs: "00" };
  }

  return {
    days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: pad(Math.floor((diff / (1000 * 60 * 60)) % 24)),
    mins: pad(Math.floor((diff / (1000 * 60)) % 60)),
    secs: pad(Math.floor((diff / 1000) % 60)),
  };
}

const UNITS: { key: keyof TimeLeft; word: string }[] = [
  { key: "days", word: "օր" },
  { key: "hours", word: "ժամ" },
  { key: "mins", word: "րոպե" },
  { key: "secs", word: "վայրկյան" },
];

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-[14vh] text-center">
      <Reveal>
        <p className="text-[clamp(1.15rem,4.8vw,1.5rem)] font-light text-cream">
          Մեր հարսանիքին մնացել է…
        </p>

        <div
          className="stagger mx-auto mt-[6vh] flex max-w-[500px] items-start justify-center gap-[min(4.5vw,1.5rem)]"
          style={{ "--stagger": "180ms" } as React.CSSProperties}
        >
          {UNITS.map(({ key, word }, i) => (
            <div key={key} className="contents">
              {i > 0 && (
                <span className="animate-colon pt-0.5 font-serif-hy text-[clamp(1.9rem,7.5vw,2.8rem)] font-semibold leading-none text-cream motion-reduce:animate-none motion-reduce:text-cream/80">
                  :
                </span>
              )}
              <div className="flex min-w-[54px] flex-col items-center">
                <span
                  key={timeLeft[key]}
                  className="animate-tick font-serif-hy text-[clamp(1.9rem,7.5vw,2.8rem)] font-semibold leading-none text-cream motion-reduce:animate-none"
                >
                  {timeLeft[key]}
                </span>
                <span className="mt-3 text-[0.72rem] font-light tracking-[0.08em] text-mist">
                  {word}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
