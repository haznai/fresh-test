/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Section } from "../components/Section.tsx";
import { AboutMeSection } from "../components/AboutMeSection/AboutMeSection.tsx";
import { Header } from "../components/Header.tsx";
import { Project } from "../components/project.tsx";

export default function Home() {
  return (
    <html class={tw`md:text-xl font-sans`}>
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
      <body class={tw`leading-snug`}>
        <div class={tw`max-w-xl mx-auto bg-white `}>
          <Header />
          <main class={tw`px-6`}>
            {/* about me */}
            <Section>
              <AboutMeSection />
            </Section>
            {/* projects */}
            <Section heading="Projects" topPadding={true}>
              <Project heading="VirtualWardrobe">lmao</Project>
            </Section>
          </main>
        </div>
      </body>
    </html>
  );
}
