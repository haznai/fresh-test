import type { VNode } from "preact";

interface LinkBlockProps {
  children: VNode[] | VNode | string;
  href: string;
}
export function LinkBlock({ children, href }: LinkBlockProps) {
  return (
    <a
      class="relative inline-flex min-w-[3.2rem] gap-0.5 px-2 py-1 justify-center text-white transition-all ease-in-out duration-200 bg-gradient-to-br from-black via-black to-pink-500 bg-size-200 hover:bg-right-bottom hover:scale-110"
      href={href}
    >
      <img
        class="h-4"
        src={"/iconblocks/link.svg"}
        alt="forward right arrow symbolizing a link"
      />
      <span class="font-bold uppercase text-xs">{children}</span>
    </a>
  );
}
