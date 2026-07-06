import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";

const QUOTE = "Երջանկությունն այն է, երբ դու գտնում ես նրան, ով փնտրում էր քեզ։";

export default function Quote() {
  return (
    <section className="px-9 py-[16vh] text-center">
      <Reveal className="relative mx-auto max-w-[620px]">
        <span className="absolute -top-[7vh] left-0 animate-float motion-reduce:animate-none">
          <Sparkle className="h-5 w-5 animate-twinkle text-cream/50 motion-reduce:animate-none" />
        </span>
        <span className="absolute -top-[3vh] right-[8%] animate-float [animation-delay:3s] motion-reduce:animate-none">
          <Sparkle className="h-3 w-3 animate-twinkle text-cream/40 [animation-delay:1.4s] motion-reduce:animate-none" />
        </span>
        <span className="absolute -bottom-[7vh] right-0 animate-float [animation-delay:5s] motion-reduce:animate-none">
          <Sparkle className="h-6 w-6 animate-twinkle text-cream/50 [animation-delay:2.2s] motion-reduce:animate-none" />
        </span>

        <p className="mx-auto max-w-[30ch] text-[clamp(1.1rem,4.6vw,1.5rem)] font-light leading-[1.85] text-cream">
          {QUOTE.split(" ").map((word, i) => (
            <span
              key={i}
              className="stagger stagger-blur inline-block whitespace-pre"
              style={{ "--stagger": `${i * 75}ms` } as React.CSSProperties}
            >
              {word}
              {i < QUOTE.split(" ").length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
