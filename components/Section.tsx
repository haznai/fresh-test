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
    <section>
      {heading != undefined ? (
        <div>
          <h1 class={tw`text-3xl font-serif font-semibold`}>{heading}</h1>
          <div class={tw`border-b-md border-black -mx-4`}></div>
        </div>
      ) : null}

      {children}
    </section>
  );
}
