/**@jsx h */
/**@jsxFrag h */
import { h } from "preact";
import type { VNode } from "preact";
import { TW, tw } from "@twind";

interface SubSectionProps {
  heading: string;
  children?: VNode[] | VNode | string;
}

export function SubSection({ heading, children }: SubSectionProps) {
  return (
    <div>
      <div class={tw` border-b-sm border-black font-serif font-semibold`}>
        {heading}
      </div>
      <div class={tw`pt-2`}>{children}</div>
    </div>
  );
}
