import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  preflight: true,
  darkMode: "class",
  mode: "strict",
  theme: {
    borderWidth: {
      sm: ".0625rem",
      md: "0.125rem",
      lg: "0.2rem",
    },
  },
};
if (IS_BROWSER) setup(config);
