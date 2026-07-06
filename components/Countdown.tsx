"use client";

import { useEffect, useState } from "react";

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
    <div className="px-[2vw] pb-[4vw] text-center">
      <p className="mb-[4vh] text-[0.78rem] font-light uppercase tracking-[0.28em] text-stone-mid">
        Մինչև հարսանիքը
      </p>
      <div className="mx-auto flex max-w-[500px] justify-center gap-[6vw] max-[480px]:gap-[5vw]">
        {UNITS.map(({ key, word }, i) => (
          <div key={key} className="contents">
            {i > 0 && (
              <span className="self-start font-serif-hy text-[clamp(1.8rem,5vw,2.6rem)] font-semibold leading-none text-stone-mid">
                :
              </span>
            )}
            <div className="flex min-w-[60px] flex-col items-center max-[480px]:min-w-[50px]">
              <span className="font-serif-hy text-[clamp(1.8rem,5vw,2.6rem)] font-semibold leading-none text-stone-dark">
                {timeLeft[key]}
              </span>
              <span className="mt-2 text-[0.72rem] font-light tracking-[0.08em] text-stone-mid">
                {word}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
