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
      class={tw`inline-flex gap-0.5 pl-1 pr-1.5 py-0.5 items-center border-sm border-black`}
    >
      <img class={tw`h-4 hover:animate-spin`} src={src} />
      <span class={tw` font-bold uppercase text-xs`}>{text}</span>
    </div>
  );
}
