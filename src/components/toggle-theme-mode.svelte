<script lang="ts">
  import Icon from './icon.svelte'

  const size = 32
  let isDark = false

  const toggleBackground = (): boolean => (isDark = !isDark)
</script>

<button
  class="box rounded-full transition-colors duration-300 ease-in-out w-max h-max p-2 {isDark
    ? 'bg-[#069EE1]'
    : 'bg-[#FCCC12]'}"
  on:click={toggleBackground}
>
  <div class="grid">
    <Icon
      class={!isDark ? 'hidden' : 'place-content-center'}
      {size}
      name="moon"
    />
    <Icon
      class=" {isDark ? 'hidden' : 'place-content-center'}"
      {size}
      name="sun"
    />
  </div>
</button>
