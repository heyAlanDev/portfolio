<script lang="ts">
  import icons from '@lib/icons.json'
  import type { IconName } from '@lib/icons.d.ts'

  export let name: IconName
  export let size: string = '1rem'
  export let color: string = 'currentColor'

  const displayIcon = icons[name]
</script>

<svg
  class={$$props.class}
  width={size}
  height={size}
  viewBox="0 0 {displayIcon.box} {displayIcon.box}"
  bind:innerHTML={displayIcon.svg}
  contenteditable
  fill={color}
/>
