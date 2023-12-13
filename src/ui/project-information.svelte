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
</script>

<article class="flex flex-col gap-6 {$$props.class}">
  <div>
    <h2
      class="text-black-500 dark:text-current text-4xl/10 tracking-widest text-left text font-bold font-serif xl:text-5xl/10"
    >
      {title}
    </h2>

    <div class="flex flex-wrap gap-1 pt-6 sm:min-w-max">
      {#each interestLinks as { link: to, target, forWhat }}
        <Link
          text="view {forWhat}"
          data-text="view {forWhat}"
          class="!py-2 !px-4 xl:text-lg text-black-500 dark:text-slate-100 dark:border-current hover:text-current active:text-current dark:hover:text-current dark:active:text-current dark:hover:bg-current dark:active:bg-current dark:relative dark:after:absolute dark:hover:after:left-0 dark:hover:after:right-0 dark:after:text-black-400 dark:hover:after:content-[attr(data-text)] dark:active:after:content-[attr(data-text)]"
          as="button"
          {target}
          {to}
        />
      {/each}
    </div>
  </div>

  <div>
    <p
      class="text-black-500 dark:text-slate-100 text-lg font-normal tracking-wide min-h-[80px] overflow-hidden text-ellipsis line-clamp-3 xl:text-2xl"
    >
      {text}
    </p>

    <slot name="techs" />
  </div>
</article>
