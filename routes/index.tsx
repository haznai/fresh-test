/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <html class={tw`md:text-2xl`}>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Hasan Atak's Homepage</title>
      </head>
      <body>
        <div class={tw`bg-white max-w-4xl min-h-screen mx-auto`}>
          <img
            class={tw`h-20 mx-auto pt-4`}
            src="/hazn_logo.svg"
            alt="logo saying hazn in fancy way"
          />
          <p class={tw`my-6`}>
            Welcome to `fresh`. Try updating this message in the
            ./routes/index.tsx file, and refresh.
          </p>
        </div>
      </body>
    </html>
  );
}
