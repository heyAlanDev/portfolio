/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        serif: ['"EB Garamond"', ...defaultTheme.fontFamily.serif]
      },

      animation: {
        'marquee-slow': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 5s linear infinite',
        'marquee-regular': 'marquee 15s linear infinite',
        change: 'change 3.5s linear',
        'to-up': 'to-up 2s linear infinite'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },

        change: {
          '25%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '90%': {
            transform: 'translateY(-20px)',
            opacity: 0
          }
        }
      }
    }
  },
  plugins: []
}
