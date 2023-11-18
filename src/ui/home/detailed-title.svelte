<script lang="ts">
  import Icon from '@components/icon.svelte'

  export let title: string
  export let direction: 'vertical' | 'horizontal' = 'vertical'
</script>

<section
  class="w-full flex justify-center items-center px-8 py-28 text-orange-400 gap-8 whitespace-pre-line aspect-[1.85/1] lg:gap-10 xl:gap-12 xl:py-24 {$$props.class}"
  class:flex-col={direction === 'vertical'}
  class:flex-row={direction === 'horizontal'}
>
  <h2 class="text-center font-serif font-extrabold small-caps">
    {title}
  </h2>
  <div
    class={direction === 'vertical'
      ? 'motion-reduce:animate-bounce'
      : 'motion-reduce:animate-bounce-left'}
  >
    <Icon
      name="arrow"
      size="2rem"
      class="lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-18 2xl:h-18 {direction ===
        'vertical' && 'rotate-90'}"
    />
  </div>

  <style>
    h2 {
      font-size: clamp(3.625rem, 1.425rem + 11vw, 14.625rem);
      line-height: clamp(3.125rem, 0.625rem + 12.5vw, 15.625rem);
    }
  </style>
</section>
