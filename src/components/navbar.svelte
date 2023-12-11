<script lang="ts">
  import links from '@lib/page-navigation-links.json'
  import { currentYear } from '@utils/date'
  import { onMount } from 'svelte'
  import Link from './link.svelte'
  import Menu from './menu.svelte'
  import ToggleLenguage from './toggle-language.svelte'
  import ToggleThemeMode from './toggle-theme-mode.svelte'

  let isMenuOpen: boolean

  const toggleMenuState = (e: Event): void => {
    isMenuOpen = !isMenuOpen
    document.body.classList.toggle('overflow-hidden')
  }

  onMount(() => {
    const $mediaListener = window.matchMedia('(min-width: 768px)')
    const $links = document.querySelectorAll('nav a')

    isMenuOpen = $mediaListener.matches

    $links.forEach($link => {
      $link.addEventListener('click', toggleMenuState)
    })

    $mediaListener.addEventListener('change', e => {
      if (e.matches) return (isMenuOpen = true)
      return (isMenuOpen = false)
    })
  })
</script>

<header
  class="sticky top-0 w-full z-40 pt-2 overflow-hidden bg-brown-500 dark:bg-transparent animate-[navbar-colors_both_ease-in-out] [animation-timeline:scroll(root_block)] [animation-range:0_113px]
  {isMenuOpen && 'max-sm:h-screen max-sm:pb-4'}
  {$$props.class}"
>
  <section
    class="w-full h-full max-w-screen-xxl flex flex-col justify-between content-center m-auto relative md:items-start md:flex-row px-4 py-4 md:px-6 lg:px-12"
  >
    <div
      class="absolute left-0 top-0 w-full h-full -z-20 animate-[opacity_both_ease-in-out] [animation-timeline:scroll(root_block)] [animation-range:0_113px] pointer-events-none backdrop-blur-md
      [-webkit-mask-image:linear-gradient(#000_55%,#000C_75%,#0000_100%)]"
    />
    <div class="flex justify-between items-center text-white">
      <a href="/" class="z-20">
        <img src="favicon.svg" alt="logo" class="w-36" />
      </a>

      <div class="md:hidden">
        <Menu {toggleMenuState} {isMenuOpen} />
      </div>
    </div>

    <nav
      class="flex flex-col gap-4 justify-center items-center md:flex-row lg:gap-8 max-sm:animate-fade
      {isMenuOpen || 'max-sm:hidden max-sm:text-transparent'}"
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
      {isMenuOpen || 'max-sm:hidden max-sm:text-transparent'}"
    >
      <div class="flex justify-center items-center gap-2 pb-2">
        <ToggleThemeMode />
        <ToggleLenguage />
      </div>
      <p class="text-sm text-center py-2 md:hidden">
        ©{currentYear} by Alan Valencia.
      </p>
    </footer>
  </section>
</header>
