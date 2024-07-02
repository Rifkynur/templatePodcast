/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7EDE8",
        secondary: "#EDF3F7",
        accentRed: "#CD4631",
      },
      boxShadow: {
        btnShadowSmall: " 3px 3px 0 rgba(0, 0, 0, 0.25)",
        btnShadowBig: "  6px 6px 0 rgba(0, 0, 0, 0.25)",
        coverShadowmSmall: "3px 3px 0 #81ADC8",
        coverShadowBig: "10px 10px 0 #81ADC8",
        blogShadowSmall: "3px 3px 0 #000000",
        blogShadowBig: "10px 10px 0 #000000",
        viewShadowSmall: " 3px 3px 0 #CD4631",
        viewShadowBig: " 6px 6px 0 #CD4631",
      },
    },
  },
  plugins: [],
};
