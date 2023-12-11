<script lang="ts">
  export let bgColor = '#BC9CE7'
  export let time: 'fast' | 'regular' | 'slow' = 'fast'
  export let reverse = false
</script>

<article
  class="rounded-2xl p-4 min-w-full bg-[--bg-color] text-current font-bold select-none {$$props.class}"
  style:--bg-color={bgColor}
>
  <div
    class="overflow-hidden whitespace-nowrap relative capitalize self-center will-change-transform before:left-0 after:right-0 before:bg-gradient-to-r after:bg-gradient-to-l from-[--bg-color]"
  >
    {#each Array(2) as _}
      <div
        class="inline-flex"
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
    @apply absolute top-0 w-1/12 h-full content-[""] z-10;
  }

  article:hover div {
    animation-play-state: paused;
  }
</style>
