import Image from "next/image";

const riseClass =
  "translate-y-[14px] animate-rise opacity-0 motion-reduce:translate-y-0 motion-reduce:animate-none motion-reduce:opacity-100";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center overflow-hidden text-center">
      <Image
        src="https://cdn-cms-uploads.picsart.com/cms-uploads/a31192c8-29fb-4fdb-ab86-1aac1c8837e7.jpg"
        alt="Մերուժան և Սաթենիկ"
        fill
        priority
        sizes="100vw"
        className="animate-hero-zoom object-cover object-[50%_30%] max-md:grayscale md:object-[50%_78%] motion-reduce:animate-none"
      />
      <div className="absolute inset-0 bg-night/25 md:bg-night/15" />
      <div className="absolute inset-x-0 bottom-0 h-[55vh] bg-gradient-to-b from-transparent to-night/85" />

      {/* phone: stacked names at the top */}
      <div className="relative z-[2] px-7 pt-[13vh] md:hidden">
        <h1
          className={`${riseClass} font-serif-hy text-[clamp(2.5rem,11vw,4.2rem)] font-normal italic leading-[1.25] text-cream [text-shadow:0_2px_30px_rgba(0,0,0,0.55)]`}
        >
          Մերուժան
          <span className="block py-1 text-[0.55em] text-champagne">և</span>
          Սաթենիկ
        </h1>

        <p
          className={`${riseClass} mt-[9vh] font-serif-hy text-[clamp(1.25rem,5.4vw,1.8rem)] tracking-[0.22em] text-cream [animation-delay:0.9s] [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]`}
        >
          16&thinsp;/&thinsp;08&thinsp;/&thinsp;2026
        </p>
      </div>

      {/* desktop: one-line names near the bottom */}
      <div className="relative z-[2] mt-auto hidden w-full flex-col items-center px-8 pb-[12vh] md:flex">
        <h1
          className={`${riseClass} font-serif-hy text-[clamp(2.4rem,4.5vw,3.6rem)] font-medium leading-[1.18] text-cream [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]`}
        >
          Մերուժան
          <span className="mx-[0.22em] inline-block text-[0.82em] font-normal italic text-champagne">
            և
          </span>
          Սաթենիկ
        </h1>

        <p
          className={`${riseClass} mt-4 text-[0.88rem] font-light uppercase tracking-[0.32em] text-cream/85 [animation-delay:0.6s]`}
        >
          Մենք ամուսնանում ենք
        </p>

        <div
          className={`${riseClass} my-7 h-9 w-px bg-gradient-to-b from-transparent via-cream/80 to-transparent [animation-delay:0.8s]`}
        />

        <p
          className={`${riseClass} font-serif-hy text-[1.1rem] font-normal tracking-[0.06em] text-cream [animation-delay:0.95s]`}
        >
          <span className="mb-1.5 block font-sans-hy text-[0.72rem] font-light uppercase tracking-[0.28em] text-cream/70">
            Կհանդիպենք
          </span>
          16 Օգոստոսի, 2026
        </p>
      </div>

      <div className="absolute bottom-[calc(26px+env(safe-area-inset-bottom))] left-1/2 z-[2] flex h-[26px] w-4 -translate-x-1/2 animate-fade-in justify-center rounded-[10px] border border-cream/55 pt-[5px] opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
        <span className="h-1.5 w-[3px] animate-dot rounded-[2px] bg-champagne motion-reduce:animate-none" />
      </div>
    </section>
  );
}
