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
    <div>
      <h2 class={tw`w-min font-serif font-semibold border-b-sm border-black`}>
        {heading}
      </h2>
      <div class={tw`pt-2`}>{children}</div>
    </div>
  );
}
