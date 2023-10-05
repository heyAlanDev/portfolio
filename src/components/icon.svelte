<script lang="ts">
  import icons from '@lib/icons.json'

  export let name: keyof typeof icons
  export let size: string = '1rem'
  export let focusable: string | number | null | undefined

  const displayIcon = icons[name]
</script>

<svg
  class={$$props.class}
  {focusable}
  width={size}
  height={size}
  viewBox="0 0 {displayIcon.box} {displayIcon.box}"
>
  <!--eslint-disable-next-line svelte/no-at-html-tags -->
  {@html displayIcon.svg}
</svg>
