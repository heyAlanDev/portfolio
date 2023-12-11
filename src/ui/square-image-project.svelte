<script lang="ts">
  import Icon from '@components/icon.svelte'
  import Link from '@components/link.svelte'
  import ProjectInfo from './project-information.svelte'
  import type { IconName } from '@lib/icons'
  import type { Image } from '@lib/projects'

  export let to: string = '#top'
  export let imgPosition: 'left' | 'right' = 'right'
  export let tecnologies: IconName[] = [
    'javascript',
    'react',
    'nodejs',
    'aws',
    'typescript'
  ]
  export let images: [Image, Image] = [
    { imgUrl: 'favicon.svg', alt: 'a' },
    { imgUrl: 'favicon.svg', alt: 'a' }
  ]
</script>

<section
  class="bg-amber-400 grid gap-4 grid-cols-2 p-6 md:gap-8 lg:grid-cols-6 lg:grid-rows-2 lg:px-12 lg:py-10 xl:gap-8 xl:px-16 xl:py-12 {$$props.class}"
>
  <span
    class="uppercase col-span-2 lg:col-span-3 lg:col-start-1 lg:row-start-[-1] lg:text-lg"
  >
    Estado • Industria
  </span>

  {#each images as { imgUrl, alt }, i}
    <picture
      class="bg-gray-300 max-h-[1200px] col-span-2
      {i !== 1
        ? 'self-center lg:col-span-3 lg:row-span-3'
        : 'hidden lg:block lg:col-span-3'}

      {imgPosition === 'right' &&
        i === 0 &&
        '-mr-6 lg:-mr-12 xl:-mr-16  lg:col-start-4 lg:row-start-1'}
      {imgPosition === 'right' &&
        i === 1 &&
        '-ml-6 lg:-ml-12 xl:-ml-16 lg:col-start-1 lg:row-start-1'}

      {imgPosition === 'left' &&
        i === 0 &&
        '-ml-6 lg:-ml-12 xl:-ml-16  lg:col-start-1 lg:row-start-1'}
      {imgPosition === 'left' &&
        i === 1 &&
        '-mr-6 lg:-mr-12 xl:-mr-16 lg:col-start-4 lg:row-start-1'}"
    >
      <img
        src={imgUrl}
        {alt}
        class="object-cover w-full bg-blue-400 aspect-square
        {i === 1 && '!aspect-[16/10]'}"
      />
    </picture>
  {/each}

  <ProjectInfo
    title="Titulo"
    text="Our animation video about our own animation process for those who can handle some video-splaining."
    class="col-span-2 lg:col-span-3 lg:row-start-2"
  >
    <div class="flex flex-wrap gap-4 pt-6" slot="techs">
      {#each tecnologies as tecnology}
        <Icon name={tecnology} size="2.5rem" class="xl:w-14 xl:h-14" />
      {/each}
    </div>
  </ProjectInfo>

  <span
    class="text-base uppercase lg:col-span-2 lg:col-start-4 lg:row-start-[-1] lg:text-lg"
  >
    categoria
  </span>

  <Link
    {to}
    as="no-animate"
    class="justify-self-end self-center col-end-[-1] lg:row-start-[-1] lg:col-start-6"
  >
    <Icon
      name="arrow"
      size="2rem"
      class="xl:w-12 xl:h-12 motion-reduce:animate-bounce-left"
    />
  </Link>
</section>
