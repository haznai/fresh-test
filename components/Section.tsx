/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";
import type { VNode } from "preact";

interface SectionProps {
  heading?: string;
  children?: VNode[] | VNode;
}

export function Section({ heading, children }: SectionProps) {
  return (
    <section class={tw`pt-5`}>
      {heading != undefined ? (
        // <div>
        //   <h1 class={tw`text-3xl font-serif font-semibold`}>{heading}</h1>
        //   <div class={tw`border-b-md border-black -mx-4`}></div>
        // </div>
        <div class={tw`relative -mx-4`}>
          <div
            class={tw`absolute inset-0 flex items-center`}
            aria-hidden="true"
          >
            <div class={tw`w-full border-b-md border-black`}></div>
          </div>
          <div class={tw`relative flex justify-center`}>
            <h1
              class={tw`px-3 bg-white text-3xl font-serif font-semibold`}
              style="font-variant:small-caps;"
            >
              {heading}
            </h1>
          </div>
        </div>
      ) : null}
      {children}
    </section>
  );
}
