<script lang="ts">
  import ToggleThemeMode from './toggle-theme-mode.svelte'
  import ToggleLenguage from './toggle-language.svelte'
  import links from '@lib/page-navigation-links.json'
  import Logo from './logo.svelte'
  import Menu from './menu.svelte'
  import Link from './link.svelte'
  import { onMount } from 'svelte'
  import { currentYear } from '@utils/date'

  let isMenuOpen = false
  let scrollPosition: boolean

  const toggleMenu = (e: Event): void => {
    isMenuOpen = (e as CustomEvent).detail.isMenuOpen
    document.body.classList.toggle('overflow-hidden')
  }

  onMount(() => {
    scrollPosition = window.scrollY > 10

    window.onscroll = function () {
      scrollPosition = window.scrollY > 10
    }

    const mediaListener = window.matchMedia('(min-width: 768px)')
    isMenuOpen = mediaListener.matches

    mediaListener.addEventListener('change', e => {
      if (e.matches) return (isMenuOpen = true)
      return (isMenuOpen = false)
    })
  })
</script>

<header
  class="flex flex-col justify-between content-center fixed left-0 top-0 w-full px-4 pt-4 z-50 gap-2 md:px-6 md:pt-6 md:pb-0 md:h-min md:items-start md:flex-row lg:px-12 lg:pt-4 transition-transform translate-y-3
  {isMenuOpen && 'max-sm:h-full max-sm:pb-4'}
  {scrollPosition && '!translate-y-0'}
  {$$props.class}"
>
  <div
    class="absolute left-0 top-0 w-full h-full -z-20 opacity-0 transition-opacity pointer-events-none backdrop-blur-md
    [-webkit-mask-image:linear-gradient(#000_55%,#000C_75%,#0000_100%)]
    {scrollPosition && 'opacity-100'}"
  ></div>
  <div class="flex justify-between items-center text-white">
    <a href="/">
      <Logo />
    </a>
    <div class="md:hidden">
      <Menu on:toggle={toggleMenu} />
    </div>
  </div>

  <nav
    class="flex flex-col gap-4 justify-center items-center md:flex-row lg:gap-8 max-sm:animate-fade
    {isMenuOpen || 'hidden text-transparent'}"
  >
    {#each links as { label, to }}
      <Link
        {to}
        text={label}
        class="font-serif text-5xl font-extrabold small-caps text-center md:text-3xl"
      />
    {/each}
  </nav>

  <footer
    class="max-sm:animate-fade
    {isMenuOpen || 'hidden text-transparent'}"
  >
    <div class="flex justify-center items-center gap-2 pb-2">
      <ToggleThemeMode />
      <ToggleLenguage />
    </div>
    <p class="text-sm text-center py-2 md:hidden">
      ©{currentYear} by Alan Valencia.
    </p>
  </footer>
</header>
