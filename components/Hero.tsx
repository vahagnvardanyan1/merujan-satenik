import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-end overflow-hidden">
      <Image
        src="https://cdn-cms-uploads.picsart.com/cms-uploads/a31192c8-29fb-4fdb-ab86-1aac1c8837e7.jpg"
        alt="Մերուժան և Սաթենիկ"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_80%] contrast-[1.02] saturate-[0.92]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(113,108,105,0.35)_0%,rgba(20,14,9,0.15)_32%,rgba(18,13,8,0.35)_55%,rgba(90,86,83,0.86)_88%)]" />

      <div className="relative z-[2] flex w-full translate-y-[14px] animate-rise flex-col items-center px-[8vw] pb-[9vh] text-center opacity-0 max-[420px]:pb-[11vh] motion-reduce:translate-y-0 motion-reduce:animate-none motion-reduce:opacity-100">
        <svg
          className="mb-[22px] h-[52px] w-[86px] opacity-85"
          viewBox="0 0 86 52"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 52 V22 A41 41 0 0 1 84 22 V52"
            className="fill-none stroke-gold stroke-[1.1]"
          />
        </svg>

        <h1 className="font-serif-hy text-[clamp(2.1rem,6.4vw,3.4rem)] font-medium leading-[1.18] tracking-[0.01em] text-cream [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
          Մերուժան
          <span className="mx-[0.18em] inline-block text-[0.85em] font-normal italic text-gold">
            և
          </span>
          Սաթենիկ
        </h1>
        <p className="mt-4 text-[0.86rem] font-light uppercase tracking-[0.32em] text-gold max-[420px]:tracking-[0.24em]">
          Մենք ամուսնանում ենք
        </p>

        <div className="my-7 h-9 w-px bg-gradient-to-b from-transparent via-gold to-transparent opacity-80" />

        <p className="font-serif-hy text-[1.05rem] font-normal tracking-[0.06em] text-cream">
          <span className="mb-1.5 block font-sans-hy text-[0.7rem] font-light uppercase tracking-[0.28em] text-gold">
            Կհանդիպենք
          </span>
          16 Օգոստոսի, 2026
        </p>
      </div>

      <div className="absolute bottom-[calc(26px+env(safe-area-inset-bottom))] left-1/2 z-[2] flex h-[26px] w-4 -translate-x-1/2 animate-fade-in justify-center rounded-[10px] border border-cream/55 pt-[5px] opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
        <span className="h-1.5 w-[3px] animate-dot rounded-[2px] bg-gold motion-reduce:animate-none" />
      </div>
    </section>
  );
}
