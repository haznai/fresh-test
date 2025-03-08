import { JSX } from "preact";
import { LinkBlock } from "../LinkBlock.tsx";

interface TalkSubsectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

export default function TalkSubsection(
  props: TalkSubsectionProps,
): JSX.Element {
  return (
    <div class="grid grid-cols-5 gap-x-2 pb-7">
      {/* heading */}
      <div class="col-span-full sm:col-span-5 row-start-1">
        <h2 class="font-serif font-semibold text-lg md:text-base">
          {props.title}
        </h2>
      </div>

      {/* border under heading*/}
      <div class="col-span-full pb-3 sm:pb-0 sm:col-span-5 row-start-2 border-t-sm border-black">
      </div>

      {/* image */}
      <div class="pb-3 sm:pb-0 col-span-2 row-start-3 pt-3">
        <img class="mx-auto max-h-28" src={props.image} alt={props.imageAlt} />
      </div>

      {/* talk description */}
      <div class="col-span-3 row-start-3 row-end-6 pt-3">
        <p>{props.description}</p>
        <div class="pt-2">
          <LinkBlock href={props.link}>Slides</LinkBlock>
        </div>
      </div>
    </div>
  );
}
