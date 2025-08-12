import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D65E8",
        secondary: "#8BA6E5",
      },
    },
  },
  plugins: [],
};

export default config;

// import type { Config } from 'tailwindcss'

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2D65E8",
//         secondary: "#8BA6E5",
//         buttonHover: "#003CC9",
//         buttonDisabled: "#C8C8C8",
//         innerPageContainers: "#FAFBFF",
//         cardBorders: "#E2EAE4",
//         darkText: "#000D29",
//         placeholderText: "#818181",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config