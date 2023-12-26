<script lang="ts">
  import Icon from './icon.svelte'

  const size = '2rem'
  const storageName = 'theme'

  let theme: string

  const toggleBackground = (): void => {
    theme === 'color'
      ? localStorage.setItem(storageName, 'no-color')
      : localStorage.setItem(storageName, 'color')

    updateTheme()
  }

  const updateTheme = (): void => {
    theme = localStorage.getItem(storageName) ?? ''

    if (
      theme === 'color' ||
      (theme === '' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.remove('dark')
      return
    }
    document.documentElement.classList.add('dark')
  }
</script>

<button
  class="rounded-full w-max h-max p-2 shadow-md
  bg-gradient-to-b from-gray-900 to-gray-600 text-white
  dark:bg-gradient-to-tl dark:from-green-300 dark:via-yellow-300 dark:to-pink-300"
  on:click={toggleBackground}
  aria-label="Dark Mode Toggle"
>
  <div class="grid place-content-center">
    <Icon {size} name="color-mode" />
  </div>
</button>
