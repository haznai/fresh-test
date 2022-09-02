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
          class={tw`flex-none h-24`}
          src="/hazn_logo.svg"
          alt="logo saying hazn in fancy way"
        />
        {/* as above, so below */}
        <div
          class={tw`inline-flex flex-none place-self-center justify-self-right pr-4 -ml-8 font-serif`}
        >
          <span class={tw`place-self-center`}>as above, so below</span>
          <span>
            <img class={tw`h-6 place-self-center`} src="/sparkles.svg"></img>
          </span>
        </div>
      </div>
    </header>
  );
}
