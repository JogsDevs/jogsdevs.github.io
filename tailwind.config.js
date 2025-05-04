/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./themes/**/layouts/**/*.{html,js}"
  ],
  darkMode: "class",  // Mengaktifkan dark mode berbasis class
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        primary: "#facc15", // Warna kuning ala Petani Kode
        darkbg: "#1f2937",  // Warna latar belakang dark mode
      },
      animation: {
        wobble: 'wobble 1s ease-in-out infinite', // Efek wobble
      },
      keyframes: {
        wobble: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
