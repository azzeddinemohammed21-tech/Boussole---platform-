/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // هوية Bousla+: كُحلي عميق (الاتجاه/الثقة) + نحاسي دافئ (إبرة البوصلة/الإنجاز)
        ink: "#0F1B2B",
        indigo: {
          DEFAULT: "#16273F",
          light: "#22385A",
        },
        brass: {
          DEFAULT: "#C08A3E",
          light: "#E0AE6C",
          dark: "#8F6427",
        },
        sand: "#F6F1E7",
        stone: "#8A94A3",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "compass-lines":
          "radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(192,138,62,0.08) 61%, transparent 62%)",
      },
    },
  },
  plugins: [],
};
