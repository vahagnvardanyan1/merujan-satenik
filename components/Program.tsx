import Image from "next/image";
import Reveal from "@/components/Reveal";

type ProgramEvent = {
  time: string;
  description: React.ReactNode;
  address: string;
  mapUrl?: string;
  photo?: string;
};

const GROOM_HOUSE_MAP =
  "https://yandex.com/maps?ol=geo&text=Erebuni%20Street,%206/10&sll=44.515161,40.140906&sspn=0.006301,0.008211&si=2kvgfcq82c513cv4xacygz4778";

const EVENTS: ProgramEvent[] = [
  {
    time: "10:30",
    description: "Փեսայի տուն",
    address: "Երևան, Էրեբունի 6/10",
    mapUrl: GROOM_HOUSE_MAP,
  },
  {
    time: "11:30",
    description: "Հարսի տուն",
    address: "Երևան, Ազատ Շերենց 2/6",
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
    mapUrl:
      "https://yandex.com/navi/org/surb_anna_yekeghetsi/237528620161?si=2kvgfcq82c513cv4xacygz4778",
    photo:
      "https://cdn-cms-uploads.picsart.com/cms-uploads/63c34052-3d67-44c0-8ff1-beea94090388.jpg", // NAR_138
  },
  {
    time: "15:30",
    description: "Փեսայի տուն",
    address: "Երևան, Էրեբունի 6/10",
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
    mapUrl:
      "https://yandex.com/navi/org/astafyan_holl/38085086548?si=2kvgfcq82c513cv4xacygz4778",
    photo:
      "https://cdn-cms-uploads.picsart.com/cms-uploads/75c6a7fa-7a5a-480f-ade1-75f624bfa5f9.jpg", // NAR_450
  },
];

function fallbackMapUrl(address: string) {
  return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
}

export default function Program() {
  return (
    <section className="px-7 py-[6vh] text-center">
      <Reveal>
        <h2 className="font-serif-hy text-[clamp(1.4rem,5.8vw,2.1rem)] font-medium tracking-[0.26em] text-champagne">
          ՕՐՎԱ ԾՐԱԳԻՐԸ
        </h2>
      </Reveal>

      <div className="mx-auto mt-[9vh] flex max-w-[440px] flex-col gap-[10vh] md:max-w-[560px]">
        {EVENTS.map(({ time, description, address, mapUrl, photo }) => (
          <Reveal key={time} className="flex flex-col items-center gap-6">
            <p className="stagger font-serif-hy text-[clamp(1.8rem,7vw,2.4rem)] font-medium text-champagne">
              {time}
            </p>

            <p
              className="stagger max-w-[30ch] text-[clamp(0.98rem,4vw,1.15rem)] font-light leading-[1.8] text-mist"
              style={{ "--stagger": "120ms" } as React.CSSProperties}
            >
              {description}
              <span className="mt-1 block">{address}</span>
            </p>

            {photo && (
              <div
                className="stagger relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
                style={{ "--stagger": "240ms" } as React.CSSProperties}
              >
                <Image
                  src={photo}
                  alt=""
                  fill
                  sizes="(max-width: 500px) 84vw, 560px"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.05] motion-reduce:transition-none"
                />
              </div>
            )}

            <a
              href={mapUrl ?? fallbackMapUrl(address)}
              target="_blank"
              rel="noopener noreferrer"
              className="stagger w-full max-w-[340px] rounded-full bg-sand py-4 text-[1rem] font-normal text-night transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_12px_32px_rgba(236,220,195,0.18)] active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none"
              style={{ "--stagger": "340ms" } as React.CSSProperties}
            >
              Քարտեզ
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
