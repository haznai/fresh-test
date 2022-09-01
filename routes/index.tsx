/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Section } from "../components/Section.tsx";

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
              {/* as above, so below */}
              <div class={tw`flex-none place-self-center pr-4 font-serif`}>
                as above, so below
              </div>
            </div>
          </header>

          <main class={tw`px-4`}>
            {/* about me */}
            <Section>
              <div class={tw`h-[40vh]`}></div>
            </Section>
            {/* projects */}
            <Section heading="Projects"></Section>
          </main>
        </div>
      </body>
    </html>
  );
}
