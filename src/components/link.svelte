<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from 'svelte/elements'

  export let to: string
  export let text: string
  export let textHoverColor: string = 'current'
  export let color: 'gray' | 'white' | 'black' = 'gray'
  export let target: HTMLAttributeAnchorTarget = '_self'
  export let responsive: boolean = false
</script>

<a
  href={to}
  class="px-6 py-2 text-center font-semibold rounded-full border-2 border-[--anchor-color] text-[--anchor-color] hover:text-[--text-hover-color] hover:bg-[--anchor-color] hover:border-transparent active:bg-[--anchor-color] active:border-transparent active:text-[--text-hover-color] select-none cursor-pointer {responsive &&
    'md:text-2xl md:px-10 md:py-4'} capitalize {$$props.class}"
  style:--text-hover-color={textHoverColor}
  style:--anchor-color={color === 'gray' ? '#2F3032' : color}
  {target}
>
  {text}
</a>
