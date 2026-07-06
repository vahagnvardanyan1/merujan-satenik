import Sparkle from "@/components/Sparkle";

export default function Quote() {
  return (
    <section className="px-9 py-[16vh] text-center">
      <div className="relative mx-auto max-w-[620px]">
        <Sparkle className="absolute -top-[7vh] left-0 h-5 w-5 text-cream/35" />
        <Sparkle className="absolute -bottom-[7vh] right-0 h-6 w-6 text-cream/35" />

        <p className="mx-auto max-w-[30ch] text-[clamp(1.1rem,4.6vw,1.5rem)] font-light leading-[1.85] text-cream">
          Երջանկությունն այն է, երբ դու գտնում ես նրան, ով փնտրում էր քեզ։
        </p>
      </div>
    </section>
  );
}
