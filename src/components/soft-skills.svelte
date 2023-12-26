<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import type { IconName } from '@lib/icons'
  import Icon from './icon.svelte'

  interface SoftSkill {
    icon: IconName
    label: string
  }

  const softSkills: SoftSkill[] = [
    { icon: 'continuos-change', label: 'Adaptabilidad' },
    {
      icon: 'continuos-learning',
      label: 'Aprendizaje Continuo'
    },
    {
      icon: 'solving-problems',
      label: 'Solucion a problemas'
    },
    { icon: 'critical-thinking', label: 'Creatividad' },
    {
      icon: 'continuos-change',
      label: 'Pensamiento Crítico'
    }
  ]

  let selectedSkillIndex = 0

  const switchSkill: () => void = () => {
    selectedSkillIndex = (selectedSkillIndex + 1) % softSkills.length
  }

  onMount(() => {
    const interval = setInterval(switchSkill, 3000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<article
  class="rounded-2xl p-4 max-w-full bg-purple-400 dark:bg-neutral-800 {$$props.class}"
>
  <header class="flex justify-between content-center mb-2">
    <h4 class="font-serif text-sm font-semibold">Habilidades blandas:</h4>

    {#key selectedSkillIndex}
      <p
        class="capitalize font-bold self-center text-sm will-change-auto"
        in:fly={{ y: -20 }}
      >
        {softSkills[selectedSkillIndex].label}
      </p>
    {/key}
  </header>
  <footer class="flex align-center justify-between gap-2">
    {#each softSkills as { icon, label }, i}
      <span
        class="rounded-full aspect-square p-2 bg-purple-300 dark:bg-neutral-500 w-full max-w-[56px]"
        class:!bg-purple-600={i === selectedSkillIndex}
        aria-label={label}
      >
        <Icon name={icon} size="2rem" class="w-full h-full" />
      </span>
    {/each}
  </footer>
</article>
