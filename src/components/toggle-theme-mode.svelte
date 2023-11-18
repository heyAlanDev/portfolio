<script lang="ts">
  import Icon from './icon.svelte'

  const size = '2rem'
  let isGray = false

  const toggleBackground = (): boolean => (isGray = !isGray)
</script>

<button
  class="box rounded-full transition-colors duration-300 ease-in-out w-max h-max p-2 shadow-md {isGray
    ? 'bg-gradient-to-b from-gray-900 to-gray-600 text-white shadow-slate-200'
    : 'bg-gradient-to-tl from-green-300 via-yellow-300 to-pink-300 shadow-slate-500'}"
  on:click={toggleBackground}
>
  <div class="grid">
    <Icon class="place-content-center" {size} name="color-mode" />
  </div>
</button>
