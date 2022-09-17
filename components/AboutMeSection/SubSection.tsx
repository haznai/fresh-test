import type { VNode } from "preact";
import { TW } from "twind";

interface SubSectionProps {
  heading: string;
  children?: VNode[] | VNode | string;
}

export function SubSection({ heading, children }: SubSectionProps) {
  return (
    <div>
      <div class=" border-b-sm border-black">
        <h2 class="font-serif font-semibold">{heading}</h2>
      </div>
      <div class="pt-2">{children}</div>
    </div>
  );
}
