<script lang="ts">
  export let text = 'Button'
  export let disabled = false
</script>

<button
  class="px-12 py-4 font-semibold text-2xl rounded-full border-2 border-[#0e1716] w-full bg-[#0e1716] active:bg-neutral-600 active:border-neutral-600 hover:bg-neutral-600 hover:border-neutral-600 disabled:opacity-60 {$$props.class}"
  {disabled}>
  {text}
</button>
