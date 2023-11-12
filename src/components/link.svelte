<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from 'svelte/elements'

  const SET_COLOR = {
    black: '#0e1716',
    white: 'white'
  }

  export let to: string
  export let text: string
  export let textHoverColor: string = 'white'
  export let color: keyof typeof SET_COLOR = 'black'
  export let target: HTMLAttributeAnchorTarget = '_self'
  export let as: 'button' | 'link' = 'link'
  export let responsive = false
</script>

<a
  id={$$props.id}
  href={to}
  class="capitalize select-none cursor-pointer hover:text-[--text-hover-color] active:text-[--text-hover-color]
    {as === 'button' &&
    'px-6 py-2 text-center font-bold rounded-full border-2 border-[--anchor-color] text-[--anchor-color]  hover:bg-[--anchor-color] hover:border-[--anchor-color] active:bg-[--anchor-color] active:border-[--anchor-color]'}
    {as === 'link' && 'hover:underline active:underline'}
    {responsive && 'md:text-2xl md:px-12 md:py-4'}
    {$$props.class}"
  style:--text-hover-color={textHoverColor}
  style:--anchor-color={SET_COLOR[color]}
  {target}
  referrerpolicy={target === '_blank' ? 'no-referrer' : null}
>
  {#if text}
    {text}
  {/if}

  <slot />
</a>
