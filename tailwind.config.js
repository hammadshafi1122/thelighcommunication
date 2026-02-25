/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#1a1a1a",
          900: "#212121",
          800: "#2a2a2a",
          700: "#333333",
          600: "#444444",
        },
        gold: {
          50:  "#fdf8f0",
          100: "#f7edda",
          200: "#edd9b0",
          300: "#e0c080",
          400: "#d4a856",
          500: "#c8953a",
          600: "#b8832c",
          700: "#9e6e22",
          800: "#7a5218",
          900: "#573a10",
        },
        brand: {
          bg: "#212121",
          surface: "#2a2a2a",
          border: "#333333",
          gold: "#c8953a",
          "gold-light": "#d4a856",
          "gold-muted": "#9e6e22",
          text: "#f5f0e8",
          "text-muted": "#a09070",
        },
      },

      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Jost", "sans-serif"],
        display: ["Cinzel", "serif"],
      },

      boxShadow: {
        gold: "0 0 24px rgba(200, 149, 58, 0.25)",
        "gold-sm": "0 0 12px rgba(200, 149, 58, 0.15)",
      },

      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-800px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },

      animation: {
        slide: 'slide 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}