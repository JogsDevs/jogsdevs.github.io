/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./themes/**/layouts/**/*.{html,js}"
  ],
  darkMode: "class",
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
        primary: "#facc15",
        darkbg: "#1f2937",
        articleText: "#fef9c3",
        articleTextLight: "#2d3748",
        articleTextDark: "#e2e8f0",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.articleTextLight'),
            strong: {
              color: theme('colors.articleTextLight'),
              fontWeight: '700',
            },
            blockquote: {
              color: theme('colors.articleTextLight'),
              borderLeftColor: theme('colors.primary'),
              fontStyle: 'italic',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.articleTextDark'), // warna isi artikel
            h1: { color: theme('colors.primary') },
            h2: { color: theme('colors.primary') },
            h3: { color: theme('colors.primary') },
            h4: { color: theme('colors.primary') },
            strong: {
              color: theme('colors.articleTextDark'),
              fontWeight: '700',
            },
            blockquote: {
              color: theme('colors.articleTextDark'),
              borderLeftColor: theme('colors.primary'),
              fontStyle: 'italic',
            },
          },
        },
      }),
      
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
