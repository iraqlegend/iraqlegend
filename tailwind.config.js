/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      mb: "300px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        background: {
          100: "#d2d2d4",
          200: "#a5a6a9",
          300: "#79797f",
          400: "#4c4d54",
          500: "#1f2029",
          600: "#191a21",
          700: "#131319",
          800: "#0c0d10",
          900: "#060608",
        },
      },
      fontFamily: {
        amiri: ["var(--font-amiri)"],
      },
      backgroundImage: {
        admin: "url('/admin.gif')",
        police: "url('/police.gif')",
        army: "url('/army.gif')",
        mod: "url('/mod.gif')",
        cia: "url('/cia.gif')",
        health: "url('/health.gif')",
        scenarios: "url('/scenarios.gif')",
        gangs: "url('/gangs.gif')",
        heros: "url('/heros.gif')",
        city: "url('/city.gif')",
        prime: "url('/prime.gif')",
        verifed: "url('/verifed.gif')",
        discord: "url('/discord.gif')",
        market: "url('/market.gif')",
        location: "url('/location.gif')",
        akram: "url('/akram.gif')",
        akram1: "url('/Ministry of Justice.gif')",
        swat1: "url('/swat1.gif')",
        Server: "url('/Server.gif')",
        akram55: "url('/akram55.gif')",
        Menu: "url('/Menu.gif')",
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwind-scrollbar"), require("daisyui")],
};
