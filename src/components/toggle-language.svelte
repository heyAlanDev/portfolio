<script lang="ts">
  import Icon from '@components/icon.svelte'

  interface Languages {
    spanish: string
    english: string
  }

  const LANGUAGE_SUPPORTED: Languages = {
    spanish: 'ES',
    english: 'EN'
  }

  let currentLanguage: keyof Languages = 'spanish'

  const toggleLanguage = (): void => {
    currentLanguage = currentLanguage === 'spanish' ? 'english' : 'spanish'
  }
</script>

<button
  on:click={toggleLanguage}
  class="flex gap-1 justify-center items-center h-max w-max"
>
  <Icon name="language" size="40" color="#F3A7CA" />
  <span class="text-4xl font-bold">{LANGUAGE_SUPPORTED[currentLanguage]}</span>
</button>
