<script lang="ts">
  import icons from '@lib/icons.json'

  export let name: keyof typeof icons
  export let size: string = '1rem'
  export let color: string | null | undefined = 'currentColor'
  export let className: string | null | undefined

  const displayIcon = icons[name]
</script>

<svg
  {color}
  class={className}
  width={size}
  height={size}
  viewBox="0 0 {displayIcon.box} {displayIcon.box}"
  bind:innerHTML={displayIcon.svg}
  contenteditable
/>
