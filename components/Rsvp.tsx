"use client";

const labelClass =
  "mb-2.5 block text-[0.75rem] font-bold uppercase tracking-[0.18em] text-ink-soft";
const inputClass =
  "w-full rounded border-[1.5px] border-stone-mid bg-white px-3.5 py-3 font-serif-hy text-[1.05rem] font-semibold text-ink outline-none focus:border-ink";
const radioGroupClass =
  "flex gap-[6vw] rounded border-[1.5px] border-stone-mid px-4 py-3.5 max-[480px]:flex-col max-[480px]:gap-3.5";
const radioClass =
  "flex cursor-pointer items-center gap-2 text-[0.92rem] font-light tracking-[0.02em] text-ink";
const radioInputClass = "h-4 w-4 accent-ink";

export default function Rsvp() {
  return (
    <section className="bg-cream px-[8vw] py-[14vh] text-ink max-[480px]:px-[6vw] max-[480px]:py-[10vh]">
      <div className="mx-auto max-w-[480px] text-center">
        <h2 className="mb-3 font-serif-hy text-[clamp(1.7rem,3.6vw,2.3rem)] font-medium text-ink">
          Հաստատեք ձեր ներկայությունը
        </h2>
        <p className="mb-[6vh] text-[0.85rem] font-light tracking-[0.06em] text-ink-soft">
          Խնդրում ենք պատասխանել մինչև 1 Օգոստոսի
        </p>

        <form
          className="flex flex-col gap-[4vh] text-left"
          name="rsvp"
          method="POST"
          data-netlify="true"
        >
          <div>
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

          <div>
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

          <div>
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
                if (input.value.length > 1) input.value = input.value.slice(0, 1);
              }}
              className={inputClass}
            />
          </div>

          <div>
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

          <button
            type="submit"
            className="mt-[2vh] cursor-pointer rounded border-[1.5px] border-ink bg-transparent py-4 text-[0.82rem] uppercase tracking-[0.24em] text-ink transition-colors duration-[250ms] hover:bg-ink hover:text-cream"
          >
            Ուղարկել
          </button>
        </form>
      </div>
    </section>
  );
}
