import { SubSection } from "./SubSection.tsx";
import { FlexIconBlocks } from "../FlexIconBlocks.tsx";
import { LinkBlock } from "../LinkBlock.tsx";

export function AboutMeSection() {
  return (
    <div class="grid grid-cols-2 gap-3 pt-2">
      {/* floating statue */}
      <div class="row-span-2 relative justify-self-center z-0 pointer-events-none">
        <img
          class="absolute top-8 p-1 filter blur-xl animate-gradient z-0"
          src="/statue/circle_1.png"
          alt="colorful blurry circle spinning in the background"
        />

        <img
          class="absolute h-64 py-5 pl-5 pr-6 animate-statueTop z-30"
          style="image-rendering:crisp-edges"
          src="/statue/statue_top.png"
          alt="drawn statue of my head"
        />

        <img
          class="absolute h-64 py-5 pl-5 pr-6 animate-statueBot z-20"
          style="image-rendering:crisp-edges"
          src="/statue/statue_bot.png"
          alt="drawn statue of my head"
        />

        <img
          class="relative h-64 py-5 pl-5 pr-6 z-10"
          src="/statue/statue_bg.png"
          style="image-rendering:crisp-edges"
          alt="drawn statue of my head"
        />
      </div>

      {/* about me */}
      <div class="row-span-2 sm:row-span-1">
        <SubSection heading="About me">
          <p>
            Twenty-something software engineer from Zurich. Passionate about
            developing Fullstack applications with Applied Artificial
            Intelligence.
          </p>
          <div class="flex gap-3 pt-2">
            {/* <LinkBlock href="/cv.pdf">CV</LinkBlock>
            <LinkBlock href="https://www.linkedin.com/in/hazn/">
              LinkedIN
            </LinkBlock> */}
          </div>
        </SubSection>
      </div>

      {/* interests */}
      <div class="row-span-1 col-span-2 sm:col-span-1">
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
      <div class="row-span-1 col-span-2 pt-2 pb-8">
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
