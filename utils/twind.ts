import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  preflight: {
    // custom fonts
    "@font-face": [
      {
        fontFamily: "Source\\ Serif\\ 4",
        fontWeight: 400,
        src: "url(/fonts/source-serif-4-v7-latin-regular.woff) format(woff)",
      },
      {
        fontFamily: "Source\\ Serif\\ 4",
        fontWeight: 600,
        src: "url(/fonts/source-serif-4-v7-latin-600.woff) format(woff)",
      },
      {
        fontFamily: "Source\\ Sans\\ 3",
        fontWeight: 400,
        src: "url(/fonts/source-sans-3-v8-latin-regular.woff) format(woff)",
      },
    ],
  },
  darkMode: "class",
  mode: "strict",
  theme: {
    borderWidth: {
      sm: ".0625rem",
      md: "0.125rem",
      lg: "0.2rem",
    },
    fontFamily: {
      sans: "Source\\ Sans\\ 3, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      serif:
        "Source\\ Serif\\ 4, ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
    },
    extend: {
      animation: {
        statue: "statue 6s ease-in-out infinite alternate;",
        gradient: "gradient 12s ease-in-out infinite alternate;",
      },
      keyframes: {
        statue: {
          "0%": {
            transform: "translateY(-0.3rem)",
          },
          "100%": {
            transform: "translateY(1.5rem)",
          },
        },
        gradient: {
          "0%": {
            transform: "translateY(-0.3rem) rotate(0deg)",
            opacity: 0.5,
          },

          "50%": {
            transform: "translateY(1.5rem) rotate(180deg)",
            opacity: 0.8,
          },
          "100%": {
            transform: "translateY(-0.3rem) rotate(360deg)",
            opacity: 1,
          },
        },
      },
    },
  },
};
if (IS_BROWSER) setup(config);
