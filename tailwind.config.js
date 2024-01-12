import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      width: {
        screen: "100dvh",
      },
      fontFamily: {
        sans: ["font-figtree-extra-bold", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        DEFAULT: "8px 8px 0 #000000;",
        active: "16px 16px 0 #000000;",
      },
    },
  },
  plugins: [],
};
