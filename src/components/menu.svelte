<script lang="ts">
  export let isMenuOpen: boolean
  export let toggleMenuState: (e: Event) => void
</script>

<button
  class="cursor-pointer relative before:absolute before:inset-1/2 before:-z-10 before:rounded-full before:w-1 before:h-1 before:transition-transform before:duration-300
  {isMenuOpen && 'before:bg-teal-300 before:scale-[500]'}"
  on:click={toggleMenuState}
  data-movil-menu={isMenuOpen}
  aria-label="Navbar Menu Button"
>
  {#each [1, 2, 3] as index}
    <div
      class="h-1 bg-current m-1 transition-transform duration-500ms"
      class:-translate-x-1={isMenuOpen}
      class:w-8={index !== 2 ?? !isMenuOpen}
      class:w-0={index === 2 && isMenuOpen}
      class:rotate-45={index === 1 && isMenuOpen}
      class:-rotate-45={index === 3 && isMenuOpen}
      class:translate-y-2={index === 1 && isMenuOpen}
      class:-translate-y-2={index === 3 && isMenuOpen}
    />
  {/each}
</button>
