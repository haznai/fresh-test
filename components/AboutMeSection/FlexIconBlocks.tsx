/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { IconBlock } from "../IconBlock.tsx";

interface FlexIconBlocksProps {
  iconMarkups: { text: string; src: string }[];
}

export function FlexIconBlocks({ iconMarkups }: FlexIconBlocksProps) {
  {
    return (
      <div class={tw`flex flex-wrap gap-1`}>
        {iconMarkups.map((x) => (
          <IconBlock text={x.text} src={x.src} />
        ))}
      </div>
    );
  }
}
