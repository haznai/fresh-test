/**@jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { SubSection } from "./SubSection.tsx";

export function AboutMeSection() {
  return (
    <div class={tw`grid grid-cols-2 grid-rows-min gap-3 pt-2`}>
      {/* floating statue */}
      <div class={tw`row-span-2 relative justify-self-center z-0 `}>
        <img
          class={tw`absolute top-8 p-1 filter blur-xl animate-gradient z-0`}
          src="/circle_1.png"
          alt="colorful blurry circle spinning in the background"
        />

        <img
          class={tw`absolute h-64 py-5 pl-5 pr-6 animate-statue z-20`}
          style="image-rendering:crisp-edges"
          src="/head_fg.png"
          alt="drawn statue of my head"
        />

        <img
          class={tw`relative h-64 py-5 pl-5 pr-6 z-10`}
          src="/head_bg.png"
          style="image-rendering:crisp-edges"
          alt="drawn statue of my head"
        />
      </div>

      {/* about me */}
      <div class={tw`row-span-2 sm:row-span-1`}>
        <SubSection heading="About me">
          Twenty-something software engineer from Zurich. Passionate about
          developing Fullstack applications with Applied Artificial
          Intelligence.
        </SubSection>
      </div>

      {/* interests */}
      <div class={tw`row-span-1 col-span-2 sm:col-span-1`}>
        <SubSection heading="Interests">
          <div class={tw`inline-flex items-center font-bold uppercase text-xs`}>
            <img class={tw`h-5`} src="/iconblocks/gear.svg" />
            <span>rust</span>
          </div>
        </SubSection>
      </div>

      {/* technologies */}
      <div class={tw`row-span-1 col-span-2 pt-2`}>
        <SubSection heading="Technologies"></SubSection>
      </div>
    </div>
  );
}
