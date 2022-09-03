/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
  return (
    <header class={tw`relative z-10`}>
      <div class={tw`flex h-[2.95rem] border-b-md border-black`}>
        <div class={tw`w-[33%]`}></div>
        {/* hazn logo */}
        <img
          class={tw`flex-none h-24 pointer-events-none`}
          src="/header/hazn_logo.svg"
          alt="logo saying hazn in fancy way"
        />
        {/* as above, so below */}
        <div
          class={tw`inline-flex flex-none items-center pr-4 -ml-8 font-serif`}
        >
          <span>as above, so below</span>

          <img
            class={tw`h-5 pointer-events-none`}
            src="/header/sparkles.svg"
          ></img>
        </div>
      </div>
    </header>
  );
}
