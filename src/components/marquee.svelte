<script lang="ts">
  export let time: 'fast' | 'regular' | 'slow' = 'fast'
  export let reverse = false
</script>

<article
  class="rounded-2xl p-4 min-w-full  text-current font-bold select-none {$$props.class}"
>
  <div
    class="overflow-hidden whitespace-nowrap relative capitalize self-center will-change-transform h-full before:left-0 after:right-0 before:bg-gradient-to-r after:bg-gradient-to-l"
  >
    {#each Array(2) as _}
      <div
        class="inline-flex h-full"
        class:animate-marquee-regular={time === 'regular'}
        class:animate-marquee-fast={time === 'fast'}
        class:animate-marquee-slow={time === 'slow'}
        style:animation-direction={reverse ? 'reverse' : null}
      >
        <slot />
      </div>
    {/each}
  </div>
</article>

<style lang="postcss">
  article > div::after,
  article > div::before {
    @apply absolute top-0 bottom-0 w-1/12 h-full content-[""] z-10;
  }

  article:hover div {
    animation-play-state: paused;
  }
</style>
