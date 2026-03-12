/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
          "primary": "#00f3ff",
          "amber-brutal": "#ffb800",
          "red-brutal": "#ff003c",
          "background-stark": "#050505",
          "panel-industrial": "#0f0f0f",
          "border-heavy": "#222222"
      },
      fontFamily: {
          "mono": ["Space Mono", "monospace"]
      },
      borderRadius: { "DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "0px" },
    },
  },
  plugins: [],
}
