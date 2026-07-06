"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const PHOTOS = [
  "https://cdn-cms-uploads.picsart.com/cms-uploads/869e99c9-5d9c-49c7-9fce-508e8a945cbc.jpg", // NAR_285
  "https://cdn-cms-uploads.picsart.com/cms-uploads/4c88ef0e-ccce-41ce-8166-87de430f6322.jpg", // NAR_212
  "https://cdn-cms-uploads.picsart.com/cms-uploads/75c6a7fa-7a5a-480f-ade1-75f624bfa5f9.jpg", // NAR_450
  "https://cdn-cms-uploads.picsart.com/cms-uploads/d369c622-7a9a-4875-9bb9-5f960ea5d382.jpg", // NAR_120
  "https://cdn-cms-uploads.picsart.com/cms-uploads/a31192c8-29fb-4fdb-ab86-1aac1c8837e7.jpg", // NAR_557
  "https://cdn-cms-uploads.picsart.com/cms-uploads/2b0ca918-1970-4996-80fe-ffeca087c165.jpg", // NAR_584
  "https://cdn-cms-uploads.picsart.com/cms-uploads/63c34052-3d67-44c0-8ff1-beea94090388.jpg", // NAR_138
  "https://cdn-cms-uploads.picsart.com/cms-uploads/b7082433-ce1f-4546-bedb-25b9fc9f987d.jpg", // NAR_182
  "https://cdn-cms-uploads.picsart.com/cms-uploads/fff953e3-43fa-42df-9ef4-a376cd7edf64.jpg", // NAR_384
  "https://cdn-cms-uploads.picsart.com/cms-uploads/ae5af2f7-598e-449d-928b-a8e1f7cf07a6.jpg", // NAR_397
];

const SPEED = 0.25;

export default function Gallery() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    let offset = 0;
    let paused = false;
    let wrapPoint = 0;
    let resumeTimeout: ReturnType<typeof setTimeout>;
    let frame: number;

    const calcWrapPoint = () => {
      const items = track.querySelectorAll<HTMLElement>("figure");
      const half = items.length / 2;
      // exact pixel distance from the first photo to where the duplicate set begins
      wrapPoint = items[half].offsetLeft - items[0].offsetLeft;
    };

    const tick = () => {
      if (!paused) {
        offset -= SPEED;
        if (Math.abs(offset) >= wrapPoint) {
          offset += wrapPoint;
        }
        track.style.transform = `translateX(${offset}px)`;
      }
      frame = requestAnimationFrame(tick);
    };

    const pauseThenResume = () => {
      paused = true;
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        paused = false;
      }, 2500);
    };

    viewport.addEventListener("touchstart", pauseThenResume, { passive: true });
    viewport.addEventListener("touchmove", pauseThenResume, { passive: true });
    viewport.addEventListener("mousedown", pauseThenResume);

    calcWrapPoint();
    window.addEventListener("resize", calcWrapPoint);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resumeTimeout);
      window.removeEventListener("resize", calcWrapPoint);
      viewport.removeEventListener("touchstart", pauseThenResume);
      viewport.removeEventListener("touchmove", pauseThenResume);
      viewport.removeEventListener("mousedown", pauseThenResume);
    };
  }, []);

  return (
    <div ref={viewportRef} className="w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-[3vw] px-[13vw] will-change-transform max-[700px]:px-[6vw] min-[1000px]:gap-6 min-[1000px]:px-[4vw]"
      >
        {[...PHOTOS, ...PHOTOS].map((src, i) => (
          <figure
            key={`${src}-${i}`}
            className="relative aspect-[3/4] w-[78vw] max-w-[320px] flex-none overflow-hidden bg-stone-mid max-[700px]:w-[260px] max-[700px]:max-w-[260px] min-[1000px]:w-[280px] min-[1000px]:max-w-[280px]"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 700px) 260px, (min-width: 1000px) 280px, 78vw"
              className="object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
