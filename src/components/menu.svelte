<script lang="ts">
  import { onMount } from 'svelte'

  let navbarElementsToToggle: NodeListOf<HTMLElement>
  let links: NodeListOf<HTMLAnchorElement>

  onMount(() => {
    navbarElementsToToggle = document.querySelectorAll('[data-navbar]')
    navbarElementsToToggle.forEach(element => {
      element.dataset.navbar = 'close'
    })

    // idk if this is a good practice
    links = document.querySelectorAll('nav a')
    links.forEach(link => {
      link.addEventListener('click', toggleNavbarState)
    })
  })

  export const toggleNavbarState = (): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!navbarElementsToToggle) return

    navbarElementsToToggle.forEach(element => {
      const { navbar } = element.dataset

      navbar === 'close'
        ? (element.dataset.navbar = 'open')
        : (element.dataset.navbar = 'close')
    })
  }
</script>

<button
  class="cursor-pointer relative group before:absolute before:inset-1/2 before:-z-10 before:rounded-full before:w-1 before:h-1 before:transition-transform before:duration-300 data-[navbar=open]:before:bg-teal-300 data-[navbar=open]:before:scale-[500]"
  data-navbar="close"
  on:click={() => {
    toggleNavbarState()
    document.body.classList.toggle('overflow-hidden')
  }}
>
  <div
    class="h-1 w-8 bg-current m-1 transition-transform duration-500ms group-data-[navbar=open]:rotate-45 group-data-[navbar=open]:-translate-x-1 group-data-[navbar=open]:translate-y-2"
  />
  <div
    class="h-1 w-8 bg-current m-1 transition-transform duration-500ms group-data-[navbar=open]:-translate-x-1 group-data-[navbar=open]:w-0"
  />

  <div
    class="h-1 w-8 bg-current m-1 transition-transform duration-500ms group-data-[navbar=open]:-rotate-45 group-data-[navbar=open]:-translate-x-1 group-data-[navbar=open]:-translate-y-2"
  />
</button>
