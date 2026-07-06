import Reveal from "@/components/Reveal";

const WEEKDAYS = ["ԵՐԿ", "ԵՐՔ", "ՉՐՔ", "ՀՆԳ", "ՈՒՐԲ", "ՇԲԹ", "ԿԻՐ"];

// August 2026 — the 1st falls on Saturday (5 leading blanks, Monday-first grid)
const LEADING_BLANKS = 5;
const DAYS_IN_MONTH = 31;
const WEDDING_DAY = 16;

function staggerStyle(index: number) {
  return { "--stagger": `${index * 22}ms` } as React.CSSProperties;
}

export default function Calendar() {
  return (
    <Reveal className="mx-auto w-full max-w-[400px] md:max-w-[440px]">
      <p className="font-serif-hy text-[clamp(1.6rem,6.4vw,2.2rem)] font-normal text-cream">
        Օգոստոս 2026
      </p>

      <div className="mt-9 grid grid-cols-7 gap-y-4">
        {WEEKDAYS.map((day, i) => (
          <span
            key={day}
            style={staggerStyle(i)}
            className="stagger text-[0.72rem] font-normal tracking-[0.06em] text-champagne"
          >
            {day}
          </span>
        ))}

        {Array.from({ length: LEADING_BLANKS }, (_, i) => (
          <span key={`blank-${i}`} />
        ))}

        {Array.from({ length: DAYS_IN_MONTH }, (_, i) => {
          const day = i + 1;
          const style = staggerStyle(day + WEEKDAYS.length);
          if (day === WEDDING_DAY) {
            return (
              <span key={day} style={style} className="stagger flex justify-center">
                <span className="relative flex h-10 w-10 animate-ring-pulse items-center justify-center rounded-full border-[1.5px] border-champagne font-serif-hy text-[1.05rem] text-champagne motion-reduce:animate-none">
                  {day}
                  <span className="absolute -right-2.5 -top-2.5 text-[0.9rem]">
                    💍
                  </span>
                </span>
              </span>
            );
          }
          return (
            <span
              key={day}
              style={style}
              className="stagger flex h-10 items-center justify-center text-[1rem] font-light text-cream"
            >
              {day}
            </span>
          );
        })}
      </div>
    </Reveal>
  );
}
