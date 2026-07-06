import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";

export default function Quote() {
  return (
    <section className="px-9 py-[16vh] text-center">
      <Reveal className="relative mx-auto max-w-[620px]">
        <Sparkle className="absolute -top-[7vh] left-0 h-5 w-5 animate-twinkle text-cream/50 motion-reduce:animate-none" />
        <Sparkle className="absolute -bottom-[7vh] right-0 h-6 w-6 animate-twinkle text-cream/50 [animation-delay:2.2s] motion-reduce:animate-none" />

        <p className="mx-auto max-w-[30ch] text-[clamp(1.1rem,4.6vw,1.5rem)] font-light leading-[1.85] text-cream">
          Երջանկությունն այն է, երբ դու գտնում ես նրան, ով փնտրում էր քեզ։
        </p>
      </Reveal>
    </section>
  );
}
