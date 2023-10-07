<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let isMenuOpen: boolean = false

  const toggleMenuState = (): void => {
    isMenuOpen = !isMenuOpen
    dispatch('toggle', { isMenuOpen })
  }
</script>

<button
  class="block cursor-pointer transition-all duration-75ms"
  on:click={toggleMenuState}
  data-movil-menu={isMenuOpen}
>
  {#each [1, 2, 3] as index}
    <div
      class="h-1 bg-current m-1 transition-all duration-500ms"
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
