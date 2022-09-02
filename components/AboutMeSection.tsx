/**@jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function AboutMeSection() {
  return (
    <div class={tw`relative`}>
      <img
        class={tw`absolute animate-statue h-60`}
        style="image-rendering:crisp-edges"
        src="/head_fg.png"
        alt="drawn statue of my head"
      />
      <img
        class={tw`h-60`}
        src="/head_bg.png"
        style="image-rendering:crisp-edges"
        alt="drawn statue of my head"
      />
    </div>
  );
}
