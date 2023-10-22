<script lang="ts">
  import Icon from '@components/icon.svelte'

  export let title: string
  export let direction: 'vertical' | 'horizontal' = 'vertical'
</script>

<section
  class="w-full md:min-h-[32rem] flex justify-center items-center px-8 py-16 text-orange-400 gap-8 {$$props.class}"
  class:flex-col={direction === 'vertical'}
  class:flex-row={direction === 'horizontal'}
>
  <h2 class="w-min text-center font-serif font-extrabold small-caps">{title}</h2>
  <Icon
    name="arrow"
    size="2rem"
    class={direction === 'vertical' && 'rotate-90'}
  />

  <style>
    h2 {
      font-size: clamp(3.625rem, 1.425rem + 11vw, 14.625rem);
      line-height: clamp(3.125rem, 0.625rem + 12.5vw, 15.625rem);
    }
  </style>
</section>
