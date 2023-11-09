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
        'marquee-regular': 'marquee 15s linear infinite',
        'bounce-left': 'bounce-left 1s infinite'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },
        'bounce-left': {
          '0%, 100%': {
            transform: 'translateX(-25%);',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1);'
          },
          '50%': {
            transform: 'translateX(0);',
            'animation-timing-function': ' cubic-bezier(0, 0, 0.2, 1);'
          }
        }
      }
    }
  },
  plugins: []
}
