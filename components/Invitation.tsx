import Calendar from "@/components/Calendar";
import Flower from "@/components/Flower";
import Reveal from "@/components/Reveal";

export default function Invitation() {
  return (
    <section className="px-7 pb-[12vh] text-center">
      <Reveal>
        <h2 className="font-serif-hy text-[clamp(1.4rem,5.8vw,2.1rem)] font-medium tracking-[0.26em] text-champagne">
          ՍԻՐԵԼԻ ՀՅՈՒՐԵՐ
        </h2>

        <p className="mx-auto mt-8 max-w-[26ch] text-[clamp(1rem,4.2vw,1.25rem)] font-light leading-[1.9] text-cream">
          Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր հարսանյաց արարողությանը։
        </p>
      </Reveal>

      <div className="mt-[9vh]">
        <Calendar />
      </div>

      <Reveal className="mt-[10vh]">
        <Flower className="draw mx-auto h-24 w-20 text-cream/60" />
      </Reveal>
    </section>
  );
}
