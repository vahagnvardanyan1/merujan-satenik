import Image from "next/image";

const EVENTS: { time: string; event: React.ReactNode; location: string }[] = [
  {
    time: "10:30",
    event: "Փեսայի տուն",
    location: "📍 Երևան, Էրեբունի 6/10",
  },
  {
    time: "11:30",
    event: "Հարսի տուն",
    location: "📍 Երևան, Ազատ Շերենց 2/6",
  },
  {
    time: "14:00",
    event: (
      <>
        Պսակադրություն՝
        <br />
        Սուրբ Աննա եկեղեցի
      </>
    ),
    location: "📍 Երևան, Աբովյան 15/1",
  },
  {
    time: "15:30",
    event: "Փեսայի տուն",
    location: "📍 Երևան, Էրեբունի 6/10",
  },
  {
    time: "17:00",
    event: (
      <>
        Հարսանեկան հանդիսություն՝ <br />
        Աստաֆյան Հոլլ
      </>
    ),
    location: "📍 Ջրվեժ, Թևոսյան փողոց",
  },
];

export default function Schedule() {
  return (
    <section className="bg-stone-dark px-[8vw] py-[14vh] text-cream max-[800px]:px-[6vw] max-[800px]:py-[10vh] max-[480px]:py-[8vh]">
      <div className="mx-auto flex max-w-[1100px] items-center gap-[6vw] max-[800px]:flex-col-reverse max-[800px]:gap-[5vh]">
        <div className="min-w-0 flex-[1_1_58%]">
          <h2 className="mb-[18px] font-serif-hy text-[clamp(1.9rem,4vw,2.7rem)] font-medium leading-[1.2] text-cream">
            Օրվա ծրագիրը
          </h2>
          <p className="mb-[6vh] text-[0.8rem] font-light uppercase tracking-[0.3em] text-gold">
            16 Օգոստոսի, 2026
          </p>

          <ul className="list-none">
            {EVENTS.map(({ time, event, location }, i) => (
              <li
                key={i}
                className="grid grid-cols-[64px_1fr_minmax(160px,220px)] items-start gap-5 border-b-[1.5px] border-dotted border-stone-mid py-[2.2vh] first:border-t-[1.5px] max-[480px]:grid-cols-[46px_1fr] max-[480px]:gap-x-3 max-[480px]:gap-y-1.5"
              >
                <span className="font-serif-hy text-[0.95rem] font-medium text-cream max-[480px]:text-[0.85rem]">
                  {time}
                </span>
                <span className="text-[0.88rem] font-light leading-[1.4] tracking-[0.03em] text-stone-mid max-[480px]:text-[0.82rem]">
                  {event}
                </span>
                <span className="text-left text-[0.82rem] font-light leading-[1.4] tracking-[0.02em] text-stone-mid max-[480px]:col-span-full max-[480px]:pl-[58px] max-[480px]:text-[0.76rem]">
                  {location}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-[1_1_42%] items-center justify-center max-[800px]:max-w-[220px]">
          <figure className="relative aspect-[3/4] w-full max-w-[340px] overflow-hidden bg-stone-mid max-[480px]:max-w-[200px]">
            <Image
              src="https://cdn-cms-uploads.picsart.com/cms-uploads/63c34052-3d67-44c0-8ff1-beea94090388.jpg"
              alt=""
              fill
              sizes="(max-width: 480px) 200px, (max-width: 800px) 220px, 340px"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
