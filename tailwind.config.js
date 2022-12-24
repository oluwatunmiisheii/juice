/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#D2C3F2",
        customBlack: "#111111",
        customGray: "#434343",
        customGrayLight: "#F8F8F8",
      },
      backgroundImage: () => ({
        "nav-gradient": `linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.25) 100%)`,
        "hero-gradient": `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)`,
        "contact-gradient": `linear-gradient(180deg, #E3FFE9 0%, #F8F8F8 100%)`,
      }),
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
