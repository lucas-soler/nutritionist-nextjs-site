/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      salmon: "#D7796F",
      purple: "#9E6284",
      moss: "#778A57",
      brown: "#9D865C",
      orange: "#E2A344",
      black: "#000",
      white: "#fff",
      red: "#ff0000",
      primary: {
        400: "#59aa77",
        500: "#46865e",
        600: "#366547",
        700: "#376B52",
      },
      secondary: {
        400: "#fad3d2",
      },
      terciary: {
        400: "#8A8B8B",
        600: "#7c828d",
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
