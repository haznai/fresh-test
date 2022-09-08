/**@jsx h */
import { h } from "preact";
import type { VNode } from "preact";
import { TW, tw } from "@twind";
import { FlexIconBlocks } from "./FlexIconBlocks.tsx";

interface ProjectProps {
  heading: string;
  children?: VNode[] | VNode | string;
}

export function Project({ heading, children }: ProjectProps) {
  return (
    <div class={tw`grid grid-cols-5 gap-x-2 pb-10`}>
      {/* heading */}
      <div class={tw`col-span-full sm:col-span-2 row-start-1`}>
        <h2 class={tw`font-serif font-semibold`}>{heading}</h2>
      </div>

      {/* border under heading*/}
      <div
        class={tw`col-span-full pb-3 sm:pb-0 sm:col-span-2 row-start-2 border-t-sm border-black`}
      ></div>

      {/* icons */}
      <div
        class={tw`row-start-4 col-span-2 sm:col-span-3 sm:row-start-2 sm:-mt-2.5 sm:pb-3`}
      >
        <FlexIconBlocks iconNames={["swift", "swiftui", "coreml"]} />
      </div>

      {/* image */}
      <div class={tw`pb-3 sm:pb-0 col-span-2 row-start-3`}>
        <img
          src="/projects/virtualwardrobe.png"
          alt="picture of a mac and iphone with the virtualwardrobe application on their screens"
        />
      </div>
      {/* project description */}
      <div class={tw`col-span-3 row-start-3 row-end-6`}>
        VirtualWardrobe is the application I created for my bachelor thesis. Its
        premise is simple, make your wardrobe portable by digitally carrying
        your clothes with you. This was realized with the help of two concepts:
        cross-platform availability and embedded artificial intelligence.
        Dolore, amet veniam pariatur eiusmod.
      </div>
    </div>
  );
}
