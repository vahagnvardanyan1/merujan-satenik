import Reveal from "@/components/Reveal";
import EventIcon, { type EventIconType } from "@/components/EventIcon";

type ProgramEvent = {
  time: string;
  description: React.ReactNode;
  address: string;
  icon: EventIconType;
  mapUrl?: string;
};

const GROOM_HOUSE_MAP =
  "https://yandex.com/maps?ol=geo&text=Erebuni%20Street,%206/10&sll=44.515161,40.140906&sspn=0.006301,0.008211&si=2kvgfcq82c513cv4xacygz4778";

const EVENTS: ProgramEvent[] = [
  {
    time: "10:30",
    description: "Փեսայի տուն",
    address: "Երևան, Էրեբունի 6/10",
    icon: "house",
    mapUrl: GROOM_HOUSE_MAP,
  },
  {
    time: "11:30",
    description: "Հարսի տուն",
    address: "Երևան, Ազատ Շերենց 2/6",
    icon: "house-heart",
    mapUrl:
      "https://yandex.com/navi?ol=geo&text=Azat%20Sherents%20Street,%202/6&sll=44.478635,40.218746&sspn=0.006294,0.008210&si=2kvgfcq82c513cv4xacygz4778",
  },
  {
    time: "14:00",
    description: (
      <>
        Պսակադրությունը տեղի կունենա
        <br />
        <strong className="font-normal text-cream">
          «Սուրբ Աննա» եկեղեցում
        </strong>
      </>
    ),
    address: "Երևան, Աբովյան 15/1",
    icon: "church",
    mapUrl:
      "https://yandex.com/navi/org/surb_anna_yekeghetsi/237528620161?si=2kvgfcq82c513cv4xacygz4778",
  },
  {
    time: "15:30",
    description: "Փեսայի տուն",
    address: "Երևան, Էրեբունի 6/10",
    icon: "house",
    mapUrl: GROOM_HOUSE_MAP,
  },
  {
    time: "17:00",
    description: (
      <>
        Հարսանեկան հանդիսությունը տեղի կունենա
        <br />
        <strong className="font-normal text-cream">«Աստաֆյան Հոլլ»-ում</strong>
      </>
    ),
    address: "Ջրվեժ, Թևոսյան փողոց",
    icon: "cake",
    mapUrl:
      "https://yandex.com/navi/org/astafyan_holl/38085086548?si=2kvgfcq82c513cv4xacygz4778",
  },
];

function fallbackMapUrl(address: string) {
  return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
}

export default function Program() {
  return (
    <section className="px-7 py-[6vh] text-center">
      <Reveal className="reveal-blur">
        <h2 className="track-settle font-serif-hy text-[clamp(1.4rem,5.8vw,2.1rem)] font-medium tracking-[0.26em] text-champagne">
          ՕՐՎԱ ԾՐԱԳԻՐԸ
        </h2>
      </Reveal>

      <div className="mx-auto mt-[9vh] flex max-w-[440px] flex-col gap-[10vh] md:max-w-[560px]">
        {EVENTS.map(({ time, description, address, icon, mapUrl }) => (
          <Reveal key={time} className="flex flex-col items-center gap-6">
            <EventIcon type={icon} className="draw h-12 w-12 text-champagne/85" />

            <p className="stagger stagger-blur font-serif-hy text-[clamp(1.8rem,7vw,2.4rem)] font-medium text-champagne [--stagger:80ms]">
              {time}
            </p>

            <p
              className="stagger max-w-[30ch] text-[clamp(0.98rem,4vw,1.15rem)] font-light leading-[1.8] text-mist"
              style={{ "--stagger": "180ms" } as React.CSSProperties}
            >
              {description}
              <span className="mt-1 block">{address}</span>
            </p>

            <a
              href={mapUrl ?? fallbackMapUrl(address)}
              target="_blank"
              rel="noopener noreferrer"
              className="stagger w-full max-w-[340px] rounded-full bg-sand py-4 text-[1rem] font-normal text-night transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_12px_32px_rgba(236,220,195,0.18)] active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none"
              style={{ "--stagger": "300ms" } as React.CSSProperties}
            >
              Քարտեզ
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
