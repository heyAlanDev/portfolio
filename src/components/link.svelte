<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from 'svelte/elements'

  export let to: string
  export let disabled: boolean = false
  export let text: string | null = null
  export let as: 'button' | 'link' = 'link'
  export let target: HTMLAttributeAnchorTarget = '_self'
</script>

<a
  id={$$props.id}
  href={to}
  class="capitalize select-none cursor-pointer group
    {disabled && 'opacity-40 pointer-events-none'}
    {as === 'link' && 'overflow-hidden relative inline-block'}
    {as === 'button' &&
    'px-6 py-3 text-center font-bold rounded-full border-2 border-current hover:bg-black-400 hover:border-black-400 dark:hover:text-black-500 dark:active:text-black-500'}
    {$$props.class}"
  {target}
  referrerpolicy={target === '_blank' ? 'no-referrer' : null}
  data-text={text}
>
  {#if as === 'link'}
    <span
      class="absolute left-0 h-0 bottom-0 w-full transition-transform [transform:scaleY(0)] [transform-origin:_100%_50%] group-hover:[transform-origin:0_50%] group-hover:[transform:scaleY(1)] group-active:[transform-origin:0_50%] group-active:[transform:scaleY(1)]"
    >
      {text ?? ''}
      <slot />
    </span>
  {/if}

  <span
    class="text-current {as === 'link' &&
      'inline-block transition-transform group-hover:[transform:translate3d(0,-200%,0)] group-active:[transform:translate3d(0,-200%,0)]'}"
  >
    {text ?? ''}
    <slot />
  </span>

  {#if as === 'link'}
    <span
      class="absolute h-full text-current top-0 left-0 w-full transition-transform [transform-origin:_100%_50%] [transform:translate3d(0,200%,0)] group-hover:[transform:translate3d(0,0,0)] group-hover:underline group-active:[transform:translate3d(0,0,0)] group-active:underline"
    >
      {text ?? ''}
      <slot />
    </span>
  {/if}
</a>
