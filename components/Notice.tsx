import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";

export default function Notice() {
  return (
    <section className="px-7 py-[8vh]">
      <Reveal className="reveal-blur mx-auto max-w-[480px]">
        <div className="rounded-3xl bg-cream px-8 py-12 text-center shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
          <Sparkle className="mx-auto mb-7 h-4 w-4 text-night/45" />

          <p className="mx-auto max-w-[30ch] text-[clamp(0.98rem,4vw,1.15rem)] font-normal leading-[1.9] text-night/85">
            Խնդրում ենք երեխաների հետ ներկա գտնվող մայրիկներին և հայրիկներին
            շատ ուշադիր լինել իրենց բալիկների նկատմամբ, քանի որ մեր հարսանիքի
            ձևաչափը չի ներառում մանկական գոտի կամ անիմատորներ։
          </p>
        </div>
      </Reveal>
    </section>
  );
}
