"use client";

import { useActionState } from "react";
import { submitRsvp, type RsvpState } from "@/app/actions/rsvp";
import Reveal from "@/components/Reveal";

function staggerStyle(step: number) {
  return { "--stagger": `${step * 110}ms` } as React.CSSProperties;
}

const initialState: RsvpState = { status: "idle" };

const labelClass =
  "mb-2.5 block text-[0.72rem] font-normal uppercase tracking-[0.2em] text-champagne";
const inputClass =
  "w-full rounded-lg border border-cream/25 bg-white/5 px-3.5 py-3 font-serif-hy text-[1.05rem] text-cream outline-none transition-colors focus:border-champagne";
const radioGroupClass =
  "flex gap-[6vw] rounded-lg border border-cream/25 px-4 py-3.5 max-[480px]:flex-col max-[480px]:gap-3.5 md:gap-10";
const radioClass =
  "flex cursor-pointer items-center gap-2.5 text-[0.92rem] font-light tracking-[0.02em] text-cream";
const radioInputClass = "h-4 w-4 accent-champagne";

export default function Rsvp() {
  const [state, formAction, pending] = useActionState(submitRsvp, initialState);

  return (
    <section className="px-7 py-[12vh] text-center max-[480px]:px-6">
      <Reveal className="mx-auto max-w-[480px]">
        <h2 className="font-serif-hy text-[clamp(1.3rem,5.2vw,1.9rem)] font-medium leading-[1.5] tracking-[0.14em] text-champagne">
          ՀԱՍՏԱՏԵՔ ՁԵՐ ՆԵՐԿԱՅՈՒԹՅՈՒՆԸ
        </h2>
        <p className="mb-[6vh] mt-4 text-[0.88rem] font-light tracking-[0.06em] text-mist">
          Խնդրում ենք պատասխանել մինչև 1 Օգոստոսի
        </p>

        {state.status === "success" ? (
          <p className="animate-tick rounded-lg border border-champagne/40 px-6 py-10 text-[1.05rem] font-light leading-[1.8] text-cream motion-reduce:animate-none">
            Շնորհակալություն։
            <br />
            Ձեր պատասխանն ընդունված է 🤍
          </p>
        ) : (
          <form action={formAction} className="flex flex-col gap-[4.5vh] text-left">
            <div className="stagger" style={staggerStyle(1)}>
              <label htmlFor="rsvp-name" className={labelClass}>
                Անուն Ազգանուն
              </label>
              <input
                type="text"
                id="rsvp-name"
                name="name"
                required
                className={inputClass}
              />
            </div>

            <div className="stagger" style={staggerStyle(2)}>
              <span className={labelClass}>Հարսի կողմից եք, թե Փեսայի</span>
              <div className={radioGroupClass}>
                <label className={radioClass}>
                  <input
                    type="radio"
                    name="side"
                    value="bride"
                    defaultChecked
                    className={radioInputClass}
                  />{" "}
                  Հարսի կողմից
                </label>
                <label className={radioClass}>
                  <input
                    type="radio"
                    name="side"
                    value="groom"
                    className={radioInputClass}
                  />{" "}
                  Փեսայի կողմից
                </label>
              </div>
            </div>

            <div className="stagger" style={staggerStyle(3)}>
              <label htmlFor="rsvp-guests" className={labelClass}>
                Քանի հոգով կգաք
              </label>
              <input
                type="number"
                id="rsvp-guests"
                name="guests"
                min={0}
                max={9}
                defaultValue={1}
                onInput={(e) => {
                  const input = e.currentTarget;
                  if (input.value.length > 1)
                    input.value = input.value.slice(0, 1);
                }}
                className={inputClass}
              />
            </div>

            <div className="stagger" style={staggerStyle(4)}>
              <span className={labelClass}>Կգաք հարսանիքին</span>
              <div className={radioGroupClass}>
                <label className={radioClass}>
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    defaultChecked
                    className={radioInputClass}
                  />{" "}
                  Այո, կգամ
                </label>
                <label className={radioClass}>
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    className={radioInputClass}
                  />{" "}
                  Ոչ, չեմ կարող
                </label>
              </div>
            </div>

            {state.status === "error" && (
              <p className="text-[0.88rem] font-light text-[#e8a9a0]">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="stagger mt-[1vh] cursor-pointer rounded-full bg-sand py-4 text-[0.88rem] uppercase tracking-[0.22em] text-night transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_12px_32px_rgba(236,220,195,0.18)] active:translate-y-0 active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 motion-reduce:transition-none"
              style={staggerStyle(5)}
            >
              {pending ? "Ուղարկվում է…" : "Ուղարկել"}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
