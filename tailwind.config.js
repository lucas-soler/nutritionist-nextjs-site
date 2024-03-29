/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      title: ['"Montserrat"', "sans-serif"],
    },
    colors: {
      yellow: {
        600: "#b69e55",
      },
      salmon: {
        400: "#fa968b",
        600: "#d7796f",
      },
      purple: {
        400: "#e092be",
        600: "#9e6284",
      },
      moss: {
        400: "#9eb477",
        600: "#778a57",
      },
      brown: {
        400: "#c9ae7d",
        600: "#9d865c",
      },
      orange: {
        400: "#fabd61",
        600: "#e2a344",
      },
      black: "#000",
      white: "#fff",
      red: "#ff0000",
      primary: {
        400: "#59aa77",
        500: "#46865e",
        600: "#366547",
        700: "#556F59",
      },
      secondary: {
        400: "#fad3d2",
        600: "#f7938f",
      },
      terciary: {
        400: "#8A8B8B",
        600: "#7c828d",
        900: "#262626",
      },
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
