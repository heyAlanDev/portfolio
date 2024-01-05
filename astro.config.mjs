import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      es: 'en'
    }
  }
})
