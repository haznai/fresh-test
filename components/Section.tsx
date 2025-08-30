import type { VNode } from "preact";

interface SectionProps {
  heading?: string;
  children?: VNode[] | VNode;
  topPadding?: boolean;
}

export function Section({
  heading,
  children,
  topPadding = false,
}: SectionProps) {
  return (
    <section class="pt-5">
      {heading != undefined
        ? (
          <div class="relative -mx-6">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-b-md border-black"></div>
            </div>
            <div class="relative flex justify-center">
              <h1
                class="px-3 bg-white text-3xl font-serif font-semibold"
                style="font-variant:small-caps;"
              >
                {heading}
              </h1>
            </div>
          </div>
        )
        : null}
      {topPadding ? <div class="pt-12"></div> : null}
      {children}
    </section>
  );
}
