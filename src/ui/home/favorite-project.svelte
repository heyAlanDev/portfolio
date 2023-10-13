<script lang="ts">
  import Icon from '@components/icon.svelte'
  import Link from '@components/link.svelte'
  import type { IconName } from '@lib/icons.d.ts'

  export let imgPosition: 'center' | 'left' | 'right' = 'center'

  export let tecnologies: IconName[] = []
</script>

<section class="bg-teal-400 grid gap-4 py-6 {$$props.class}">
  <span class="px-8">Estado • Industria</span>

  <div
    class="bg-gray-300"
    class:pl-8={imgPosition === 'right'}
    class:pr-8={imgPosition === 'left'}
  >
    <img
      src="favicon.svg"
      alt=""
      class="object-cover
      {imgPosition === 'center'
        ? 'aspect-[5/3] w-full max-h-[1200px]'
        : 'aspect-square w-full max-h-[1200px]'}"
    />
  </div>

  <article class="px-6 grid gap-4">
    <h2 class="text-4xl/10 tracking-widest text-left text font-bold font-serif">
      Titulo
    </h2>
    <p class="text-base font-normal tracking-wide">
      Our animation video about our own animation process for those who can
      handle some video-splaining.
    </p>

    <div class="flex gap-2">
      {#each tecnologies as tecnology}
        <Icon name={tecnology} size="2rem" />
      {/each}
    </div>

    <div class="flex flex-wrap gap-1 -ml-4">
      <Link text="view Code" to="/" class="!py-2 !px-4" />
      <Link text="view Case" to="/" class="!py-2 !px-4" />
      <Link text="view Demo" to="/" class="!py-2 !px-4" />
    </div>

    <div class="flex justify-between">
      <span class="text-base">categoria</span>
      <Icon name="arrow" size="2rem" />
    </div>
  </article>
</section>
