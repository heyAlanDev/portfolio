/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Archivo Variable"', ...defaultTheme.fontFamily.sans],
        serif: ['"Crimson Pro Variable"', ...defaultTheme.fontFamily.serif]
      },

      animation: {
        'marquee-slow': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 5s linear infinite',
        'marquee-regular': 'marquee 15s linear infinite'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    }
  },
  plugins: []
}
