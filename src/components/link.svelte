<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from 'svelte/elements'

  export let to: string | null
  export let disabled: boolean = false
  export let text: string | null = null
  export let as: 'button' | 'link' | 'no-animate' = 'link'
  export let target: HTMLAttributeAnchorTarget = '_self'

  const { class: className, ...restProps } = $$restProps
</script>

<a
  href={to}
  class="capitalize select-none cursor-pointer group
    {disabled && 'opacity-40 pointer-events-none'}
    {as === 'no-animate' && 'hover:underline active:underline'}
    {as === 'link' && 'overflow-hidden relative inline-block'}
    {as === 'button' &&
    'px-6 py-3 text-center font-bold rounded-full border-2 border-current hover:bg-black-400 hover:border-black-400 dark:hover:text-black-500 dark:active:text-black-500'}
    {className}"
  {target}
  referrerpolicy={target === '_blank' ? 'no-referrer' : null}
  {...restProps}
>
  {#if as === 'link'}
    <span
      class="absolute left-0 h-0 bottom-0 w-full transition-transform [transform:scaleY(0)] [transform-origin:_100%_50%] group-hover:[transform-origin:0_50%] group-hover:[transform:scaleY(1)] group-active:[transform-origin:0_50%] group-active:[transform:scaleY(1)]"
    >
      {text ?? ''}
      <slot />
    </span>

    <span
      class="text-current inline-block transition-transform group-hover:[transform:translate3d(0,-200%,0)] group-active:[transform:translate3d(0,-200%,0)]"
    >
      {text ?? ''}
      <slot />
    </span>

    <span
      class="absolute h-full text-current top-0 left-0 w-full transition-transform [transform-origin:_100%_50%] [transform:translate3d(0,200%,0)] group-hover:[transform:translate3d(0,0,0)] group-hover:underline group-active:[transform:translate3d(0,0,0)] group-active:underline"
    >
      {text ?? ''}
      <slot />
    </span>
  {:else}
    {text ?? ''}
    <slot />
  {/if}
</a>
