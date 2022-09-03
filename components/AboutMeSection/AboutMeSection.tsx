/**@jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { SubSection } from "./SubSection.tsx";
import { FlexIconBlocks } from "./FlexIconBlocks.tsx";

// all possible iconblocks are stored here

export const IconBlockMarkups = {
  //interests
  football: "/iconblocks/football.svg",
  mma: "/iconblocks/mma.svg",
  "taking walks": "/iconblocks/taking_walks.svg",
  reading: "/iconblocks/reading.svg",
  journaling: "/iconblocks/journaling.svg",
  vinyl: "/iconblocks/vinyl.svg",
  "cutting-edge tech": "/iconblocks/cutting_edge_tech.svg",
  "design x ai": "/iconblocks/design_x_ai.svg",

  // technologies
  "fast.ai": "/iconblocks/fastdotai.svg",
  swift: "/iconblocks/swift.svg",
  python: "/iconblocks/python.svg",
  "next.js": "/iconblocks/nextdotjs.svg",
  Prisma: "/iconblocks/prisma.svg",
  xcode: "/iconblocks/xcode.svg",
  vscode: "/iconblocks/vscode.svg",
  webassembly: "/iconblocks/webassembly.svg",
  blender: "/iconblocks/blender.svg",
  tailwindcss: "/iconblocks/tailwindcss.svg",
  deno: "/iconblocks/deno.svg",
  typescript: "/iconblocks/typescript.svg",
  sqlite: "/iconblocks/sqlite.svg",
  docker: "/iconblocks/docker.svg",
  jupyter: "/iconblocks/jupyter.svg",
  figma: "/iconblocks/figma.svg",
  vim: "/iconblocks/vim.svg",
  rust: "/iconblocks/rust.svg",
  react: "/iconblocks/react.svg",
  git: "/iconblocks/git.svg",
};

export function AboutMeSection() {
  return (
    <div class={tw`leading-snug grid grid-cols-2 grid-rows-min gap-3 pt-2`}>
      {/* floating statue */}
      <div
        class={tw`row-span-2 relative justify-self-center z-0 pointer-events-none`}
      >
        <img
          class={tw`absolute top-8 p-1 filter blur-xl animate-gradient z-0`}
          src="/statue/circle_1.png"
          alt="colorful blurry circle spinning in the background"
        />

        <img
          class={tw`absolute h-64 py-5 pl-5 pr-6 animate-statueTop z-30`}
          style="image-rendering:crisp-edges"
          src="/statue/statue_top.png"
          alt="drawn statue of my head"
        />

        <img
          class={tw`absolute h-64 py-5 pl-5 pr-6 animate-statueBot z-20`}
          style="image-rendering:crisp-edges"
          src="/statue/statue_bot.png"
          alt="drawn statue of my head"
        />

        <img
          class={tw`relative h-64 py-5 pl-5 pr-6 z-10`}
          src="/statue/statue_bg.png"
          style="image-rendering:crisp-edges"
          alt="drawn statue of my head"
        />
      </div>

      {/* about me */}
      <div class={tw`row-span-2 sm:row-span-1`}>
        <SubSection heading="About me">
          Twenty-something software engineer from Zurich. Passionate about
          developing Fullstack applications with Applied Artificial
          Intelligence.
        </SubSection>
      </div>

      {/* interests */}
      <div class={tw`row-span-1 col-span-2 sm:col-span-1`}>
        <SubSection heading="Interests">
          <FlexIconBlocks
            iconNames={[
              "football",
              "mma",
              "taking walks",
              "reading",
              "journaling",
              "vinyl",
              "cutting-edge tech",
              "design x ai",
            ]}
          />
        </SubSection>
      </div>

      {/* technologies */}
      <div class={tw`row-span-1 col-span-2 pt-2 pb-3`}>
        <SubSection heading="Technologies">
          <FlexIconBlocks
            iconNames={[
              "rust",
              "swift",
              "python",
              "typescript",
              "deno",
              "next.js",
              "react",
              "webassembly",
              "Prisma",
              "figma",
              "tailwindcss",
              "sqlite",
              "jupyter",
              "fast.ai",
              "blender",
              "vscode",
              "xcode",
              "vim",
              "git",
              "docker",
            ]}
          ></FlexIconBlocks>
        </SubSection>
      </div>
    </div>
  );
}
