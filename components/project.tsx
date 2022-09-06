/**@jsx h */
import { h } from "preact";
import type { VNode } from "preact";
import { TW, tw } from "@twind";

interface ProjectProps {
  heading: string;
  children?: VNode[] | VNode | string;
}

export function Project({ heading, children }: ProjectProps) {
  return (
    <div class={tw`grid grid-cols-5 gap-x-2`}>
      {/* heading full row */}
      <div class={tw`flex col-span-full`}>
        <h2 class={tw`font-serif font-semibold`}>{heading}</h2>
        <div class={tw`w-full flex justify-end`}>
          <div>Tech 1</div>
          <div>Tech 2</div>
        </div>
      </div>
      <div class={tw`col-span-full pb-4 border-t-sm border-black`} />
      <div class={tw`col-span-2`}>
        <img
          src="/projects/virtualwardrobe.png"
          alt="picture of a mac and iphone with the virtualwardrobe application on their screens"
        />
      </div>
      <div class={tw`col-span-3`}>
        VirtualWardrobe is the application I created for my bachelor thesis. Its
        premise is simple, make your wardrobe portable by digitally carrying
        your clothes with you. This was realized with the help of two concepts:
        cross-platform availability and embedded artificial intelligence.
      </div>
    </div>
  );
}
