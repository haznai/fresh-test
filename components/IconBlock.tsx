/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface IconBlockProps {
  text: string;
  src: string;
}
export function IconBlock({ src, text }: IconBlockProps) {
  return (
    <div
      class={tw`relative inline-flex gap-0.5 pl-1 pr-1.5 py-0.5 overflow-hidden items-center group border-sm border-black`}
    >
      <span
        class={tw`absolute left-0 w-6 h-12 duration-1000 -translate-x-10 rotate-[20deg] group-hover:translate-x-36 bg-black`}
      />
      <img class={tw`h-4 aspect-auto`} src={src} alt="logo of the technology" />
      <span class={tw` font-bold uppercase text-xs`}>{text}</span>
    </div>
  );
}
