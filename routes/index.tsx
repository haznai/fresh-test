/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Section } from "../components/Section.tsx";

export default function Home() {
  return (
    <html class={tw`md:text-xl font-serif`}>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Hasan Atak's Homepage</title>
      </Head>
      <body>
        <div
          class={tw`max-w-3xl min-h-screen mx-auto bg-white md:border-x-sm border-black`}
        >
          {/* header */}
          <header class={tw`relative`}>
            <div class={tw`flex h-[2.95rem] border-b-md border-black`}>
              <div class={tw`w-[33%]`}></div>
              {/* hazn logo */}
              <img
                class={tw`flex-none h-24`}
                src="/hazn_logo.svg"
                alt="logo saying hazn in fancy way"
              />
              <div class={tw`flex-none place-self-center pr-4`}>
                as above, so below
              </div>
            </div>
          </header>

          <main class={tw`px-4`}>
            <Section>
              <div class={tw`h-[40vh]`}></div>
            </Section>
            <Section heading="Projects"></Section>
          </main>
        </div>
      </body>
    </html>
  );
}
