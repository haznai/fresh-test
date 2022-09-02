/**@jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { SubSection } from "./SubSection.tsx";
import { IconBlock } from "../IconBlock.tsx";

// array for the icons in the 'interests' subsection
const interests: { text: string; src: string }[] = [
  { text: "football", src: "/iconblocks/football.svg" },
  { text: "mma", src: "/iconblocks/gear.svg" },
  { text: "taking walks", src: "/iconblocks/taking_walks.svg" },
  { text: "reading", src: "/iconblocks/reading.svg" },
  { text: "journaling", src: "/iconblocks/journaling.svg" },
  { text: "design x ai", src: "/iconblocks/design_x_ai.svg" },
  { text: "vinyl", src: "/iconblocks/vinyl.svg" },
  { text: "cutting-edge tech", src: "/iconblocks/cutting_edge_tech.svg" },
];

const technologies: { text: string; src: string }[] = [
  { text: "rust", src: "/iconblocks/gear.svg" },
];

export function AboutMeSection() {
  return (
    <div class={tw`grid grid-cols-2 grid-rows-min gap-3 pt-2`}>
      {/* floating statue */}
      <div
        class={tw`row-span-2 relative justify-self-center z-0 pointer-events-none`}
      >
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
          {interests.map((x) => (
            <IconBlock text={x.text} src={x.src} />
          ))}
        </SubSection>
      </div>

      {/* technologies */}
      <div class={tw`row-span-1 col-span-2 pt-2`}>
        <SubSection heading="Technologies">
          {technologies.map((x) => (
            <IconBlock text={x.text} src={x.src} />
          ))}
        </SubSection>
      </div>
    </div>
  );
}
