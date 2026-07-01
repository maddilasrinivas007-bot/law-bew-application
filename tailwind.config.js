/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#111111",
          gold: "#C89B3C",
          surface: "rgba(255,255,255,0.08)",
          muted: "#E6E6E6"
        }
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0,0,0,0.25)",
        soft: "0 10px 30px rgba(0,0,0,0.16)"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [],
};
