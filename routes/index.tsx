/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Section } from "../components/Section.tsx";
import { Header } from "../components/Header.tsx";

export default function Home() {
  return (
    <html class={tw`md:text-xl font-sans`}>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Hasan Atak's Homepage</title>
      </Head>
      <body>
        <div
          class={tw`max-w-xl min-h-screen mx-auto bg-white border-x-sm border-black`}
        >
          <Header />
          <main class={tw`px-4`}>
            {/* about me */}
            <Section>
              <div class={tw`relative`}>
                <img
                  class={tw`absolute animate-statue h-60`}
                  style="image-rendering:crisp-edges"
                  src="/head_fg.png"
                  alt="drawn statue of my head"
                />
                <img
                  class={tw`h-60`}
                  src="/head_bg.png"
                  style="image-rendering:crisp-edges"
                  alt="drawn statue of my head"
                />
              </div>
            </Section>
            {/* projects */}
            <Section heading="Projects"></Section>
          </main>
        </div>
      </body>
    </html>
  );
}
