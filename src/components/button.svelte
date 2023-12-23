<script lang="ts">
  export let text = 'Button'
  export let disabled = false

  const { class: className, ...restProps } = $$restProps
</script>

<button
  class="px-12 py-4 font-semibold text-2xl rounded-full border-2 border-black-400 w-full bg-black-400 dark:bg-slate-100 dark:border-slate-100 active:bg-stone-700 active:border-stone-700 hover:bg-stone-700 hover:border-stone-700 dark:hover:bg-slate-300 dark:active:bg-slate-300 dark:hover:border-slate-300 dark:active:border-slate-300 disabled:opacity-50 {className}"
  {disabled}
  {...restProps}
>
  {text}
</button>
