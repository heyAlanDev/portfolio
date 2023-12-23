<script lang="ts">
  import Link from '@components/link.svelte'
  import type { LinksProject } from '@lib/projects'

  export let name: string, description: string | null

  export let links: LinksProject = [
    { type: 'code', link: '#top' },
    { type: 'case', link: '#top' },
    { type: 'demo', link: '#top' }
  ]
  const title = name.split('-').join(' ')
</script>

<article class="flex flex-col gap-6 {$$props.class}">
  <div>
    <h2
      class="text-black-500 dark:text-current text-xl tracking-widest text-left text font-bold font-serif first-letter:uppercase xl:text-4xl/10
      "
    >
      {title}
    </h2>

    <div class="flex flex-wrap gap-1 pt-6 sm:min-w-max">
      {#each links as { link, target, type }}
        <Link
          to={link}
          text={`view ${type}`}
          data-text={`view ${type}`}
          class="!py-2 !px-4 xl:text-lg text-black-500 dark:text-slate-100 dark:border-current hover:text-current active:text-current dark:hover:text-current dark:active:text-current dark:hover:bg-current dark:active:bg-current dark:relative dark:after:absolute dark:hover:after:left-0 dark:hover:after:right-0 dark:after:text-black-400 dark:hover:after:content-[attr(data-text)] dark:active:after:content-[attr(data-text)]"
          as="button"
          {target}
          disabled={link === null || link === '' || link === undefined}
        />
      {/each}
    </div>
  </div>

  <div>
    <p
      class="text-black-500 dark:text-slate-100 text-lg font-normal tracking-wide min-h-[80px] overflow-hidden text-ellipsis line-clamp-3 xl:text-2xl"
    >
      {description}
    </p>

    <slot name="techs" />
  </div>
</article>
