<script lang="ts">
  import Link from '@components/link.svelte'
  import type { HTMLAttributeAnchorTarget } from 'svelte/elements'

  interface InterestLink {
    forWhat: 'code' | 'case' | 'demo'
    link: string
    target: HTMLAttributeAnchorTarget
  }

  export let title: string, text: string

  export let interestLinks: [InterestLink, InterestLink, InterestLink] = [
    { forWhat: 'code', link: '#top', target: '_blank' },
    { forWhat: 'case', link: '#top', target: '_self' },
    { forWhat: 'demo', link: '#top', target: '_blank' }
  ]
  export let color = 'yellow-400'

  const hoverColor = `hover:text-${color}`
</script>

<article class="flex flex-col gap-6 bg-inherit {$$props.class}">
  <div>
    <h2
      class="text-4xl/10 tracking-widest text-left text font-bold font-serif xl:text-5xl/10"
    >
      {title}
    </h2>

    <div class="flex flex-wrap gap-1 pt-6 sm:min-w-max">
      {#each interestLinks as { link: to, target, forWhat }}
        <Link
          text="view {forWhat}"
          class="!py-2 !px-4 xl:text-lg {hoverColor}"
          as="button"
          {target}
          {to}
        />
      {/each}
    </div>
  </div>

  <div class="bg-inherit">
    <p
      class="bg-inherit text-lg font-normal tracking-wide min-h-[80px] overflow-hidden text-ellipsis line-clamp-3 xl:text-2xl"
    >
      {text}
    </p>

    <slot name="techs" />
  </div>
</article>
