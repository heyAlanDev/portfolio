<script lang="ts">
  import ToggleThemeMode from './toggle-theme-mode.svelte'
  import ToggleLenguage from './toggle-language.svelte'
  import links from '@lib/page-navigation-links.json'
  import Logo from './logo.svelte'
  import Menu from './menu.svelte'
  import Link from './link.svelte'
  import { onMount } from 'svelte'

  let isMenuOpen: boolean | null = false
  let hasMenu: boolean

  const toggleMenu = (e: Event): void => {
    isMenuOpen = (e as CustomEvent).detail.isMenuOpen
    document.body.classList.toggle('overflow-hidden')
  }

  onMount(() => {
    const mediaListener = window.matchMedia('(min-width: 768px)')
    hasMenu = !mediaListener.matches

    mediaListener.addEventListener('change', e => {
      console.log({ hasMenu, isMenuOpen, match: e.matches }, 'on medialistener')
      hasMenu = !mediaListener.matches
      if (e.matches) return (isMenuOpen = null)
      return (isMenuOpen = false)
    })

    isMenuOpen = hasMenu ? false : null
  })
</script>

<header
  class="flex flex-col justify-between content-center fixed w-full px-4 py-2 z-10 gap-2 md:px-6 md:py-6 md:items-start md:flex-row lg:px-12
  {isMenuOpen === true && 'h-full w-full'}"
>
  <div class="flex justify-between items-center text-white">
    <Logo />
    <div class="md:hidden">
      <Menu on:toggle={toggleMenu} />
    </div>
  </div>

  {#if hasMenu}
    <span
      class="absolute top-[66px] right-8 -z-10 rounded-full w-1 h-1 bg-[#72FFD4]
    {isMenuOpen === true
      ? 'bg-[#72FFD4] scale-[500] transition-out'
      : 'transition-in'}"
    />
  {/if}

  <nav
    class="flex flex-col gap-4 justify-center items-center md:flex-row lg:gap-8 transition-in animate-fade
    {isMenuOpen === false && 'hidden text-transparent'}"
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
    class="flex gap-2 justify-center items-center flex-wrap transition-all animate-fade
    {isMenuOpen === false && 'hidden text-transparent'}"
  >
    <ToggleThemeMode />
    <ToggleLenguage />
    <p class="text-sm text-center py-2 md:hidden">
      ©2023 by Alan Valencia. ALL RIGHTS RESERVED.
    </p>
  </footer>
</header>

<style>
  .transition-in {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.5s;
  }

  .transition-out {
    transition-property: all;
    transition-timing-function: cubic-bezier(1, 0.2, 0, 0.4);
    transition-duration: 0.5s;
  }

  .animate-fade {
    animation: fade 1s ease-in-out;
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
