<script lang="ts">
  import ToggleThemeMode from './toggle-theme-mode.svelte'
  import ToggleLenguage from './toggle-language.svelte'
  import links from '@lib/page-navigation-links.json'
  import Logo from './logo.svelte'
  import Menu from './menu.svelte'

  let isMenuOpen: boolean = false

  const toggleMenu = (e: Event): void => {
    isMenuOpen = (e as CustomEvent).detail.isMenuOpen
    document.body.classList.toggle('overflow-hidden')
  }
</script>

<header
  class="flex fixed self-center w-full px-4 py-2 z-10 md:px-12
  {isMenuOpen ? 'bg-[#72FFD4] h-full flex-col over' : ''}"
>
  <div class="w-full flex justify-between items-center md:w-max text-white">
    <Logo />
    <div class="md:hidden">
      <Menu on:toggle={toggleMenu} />
    </div>
  </div>

  <div
    class="{isMenuOpen
      ? 'flex-col flex-grow'
      : 'hidden'} flex md:flex-row md:items-start"
  >
    <nav
      class="flex flex-col my-auto gap-4 md:flex-row md:flex-grow md:my-0 justify-center md:gap-10"
    >
      {#each links as { label, to } (label)}
        <a
          href={to}
          class="font-serif text-5xl small-caps font-bold lg:text-3xl text-center hover:text-black"
        >
          {label}
        </a>
      {/each}
    </nav>
    <div class="flex gap-4 justify-center">
      <ToggleThemeMode />
      <ToggleLenguage />
    </div>
    <p class="text-sm text-center py-2 md:hidden">
      ©2023 by Alan Valencia. ALL RIGHTS RESERVED.
    </p>
  </div>
</header>
