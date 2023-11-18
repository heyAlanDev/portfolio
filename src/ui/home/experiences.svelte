<script>
  const experiences = [
    {
      job: 'Fullstack developer',
      startDate: 'Ene 2020',
      endDate: 'Dic 2023',
      logros: [
        'Enfatiza tus logros más sobresalientes en cada rol. Esto podría incluir mejoras en eficiencia, proyectos exitosos, reconocimientos o premios recibidos, o contribuciones al crecimiento de la empresa.'
      ],
      company: 'Freelance',
      description:
        'Detalla tus responsabilidades y logros clave en cada posición. Utiliza viñetas y resalta las tareas y proyectos más relevantes. Cuantifica tus logros siempre que sea posible para demostrar tu impacto.'
    },
    {
      job: 'Fullstack developer',
      startDate: 'Ene 2020',
      endDate: 'Dic 2023',
      logros: [
        'Enfatiza tus logros más sobresalientes en cada rol. Esto podría incluir mejoras en eficiencia, proyectos exitosos, reconocimientos o premios recibidos, o contribuciones al crecimiento de la empresa.'
      ],
      company: 'Freelance',
      description:
        'Detalla tus responsabilidades y logros clave en cada posición. Utiliza viñetas y resalta las tareas y proyectos más relevantes. Cuantifica tus logros siempre que sea posible para demostrar tu impacto.'
    },
    {
      job: 'Fullstack developer',
      startDate: 'Ene 2020',
      endDate: 'Dic 2023',
      logros: [
        'Enfatiza tus logros más sobresalientes en cada rol. Esto podría incluir mejoras en eficiencia, proyectos exitosos, reconocimientos o premios recibidos, o contribuciones al crecimiento de la empresa.'
      ],
      company: 'Freelance',
      description:
        'Detalla tus responsabilidades y logros clave en cada posición. Utiliza viñetas y resalta las tareas y proyectos más relevantes. Cuantifica tus logros siempre que sea posible para demostrar tu impacto.'
    }
  ]
</script>

{#each experiences as { job, startDate, endDate, description, company }}
  <details class="bg-[#CFB2E6] p-4 rounded-2xl my-2 group">
    <summary
      class="text-xl font-semibold font-serif capitalize flex justify-between"
    >
      <header>
        <h5>
          {job}
        </h5>
        <p class="text-base font-light font-sans capitalize">
          {company} (2 años)
        </p>
      </header>
      <div
        class="custom-marker font-sans font-normal text-2xl self-center before:content-['+'] group-open:before:content-['-']"
      />
    </summary>

    <p class="text-sm font-light font-sans capitalize whitespace-nowrap">
      {startDate} - {endDate}
    </p>
    <p>{description}</p>
  </details>
{/each}
