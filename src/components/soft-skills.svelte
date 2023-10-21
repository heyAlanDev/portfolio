<script lang="ts">
  import { onMount } from 'svelte'
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
      label: 'Solución de Problemas'
    },
    { icon: 'critical-thinking', label: 'Creatividad' },
    {
      icon: 'continuos-change',
      label: 'Pensamiento Crítico'
    }
  ]

  let selectedSkillIndex = 0
  let selectedSkillTransition = true

  const switchSkill: () => void = () => {
    selectedSkillIndex = (selectedSkillIndex + 1) % softSkills.length
    console.log('change')
  }

  const startSkillAnimation: TimerHandler = () => {
    selectedSkillTransition = true
    switchSkill()

    setTimeout(() => {
      selectedSkillTransition = false
    }, 3000)
  }

  onMount(() => {
    const interval = setInterval(startSkillAnimation, 3500)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<article class="rounded-2xl p-4 max-w-full bg-[#BC9CE7]">
  <header class="flex justify-between content-center mb-2">
    <h4 class="font-serif text-sm font-semibold">Habilidades blandas:</h4>
    <p
      class="capitalize font-bold self-center text-sm will-change-auto"
      class:motion-reduce:animate-change={selectedSkillTransition}
    >
      {softSkills[selectedSkillIndex].label}
    </p>
  </header>
  <footer class="flex gap-2">
    {#each softSkills as { icon, label }, i}
      <span
        class="rounded-full aspect-square p-2 bg-[#CFB2E6]"
        class:!bg-purple-500={i === selectedSkillIndex}
        aria-label={label}
      >
        <Icon name={icon} size="2rem" />
      </span>
    {/each}
  </footer>
</article>
