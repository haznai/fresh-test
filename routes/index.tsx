import { Head } from "$fresh/runtime.ts";
import { Section } from "../components/Section.tsx";
import { AboutMeSection } from "../components/AboutMeSection/AboutMeSection.tsx";
import { Header } from "../components/Header.tsx";
import { ProjectSection } from "../components/ProjectSection/ProjectSection.tsx";
import TalksSection from "../components/TalksSection/TalksSection.tsx";

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
  swiftui: "/iconblocks/swift.svg",
  coreml: "/iconblocks/coreml.svg",
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
  wordpress: "/iconblocks/wordpress.svg",
  tensorflow: "/iconblocks/tensorflow.svg",
  xgboost: "/iconblocks/xgboost.svg",
  rpi: "/iconblocks/rpi.svg",
  php: "/iconblocks/php.svg",
  drupal: "/iconblocks/drupal.svg",
  pytorch: "/iconblocks/pytorch.svg",
  dspy: "/iconblocks/dspy.svg",
};

export default function Home() {
  return (
    <html class="md:text-xl font-sans">
      <Head>
        <meta name="viewport" content="width=device-width" />
        {/* favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <title>Hasan Atak's Homepage</title>
      </Head>
      <body class="leading-snug">
        <div class="max-w-xl mx-auto bg-white ">
          <Header />
          <main class="px-6">
            {/* about me */}
            <Section>
              <AboutMeSection />
            </Section>
            {/* talks */}
            <Section heading="Talks" topPadding={true}>
              <TalksSection />
            </Section>
            {/* projects */}
            <Section heading="Projects" topPadding={true}>
              <ProjectSection />
            </Section>
          </main>
        </div>
      </body>
    </html>
  );
}
