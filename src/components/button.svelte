<script lang="ts">
  export let text = 'Button'
  export let disabled = false
</script>

<button
  class="px-12 py-4 font-semibold text-2xl rounded-full border-2 border-[#0e1716] w-full bg-[#0e1716] active:bg-stone-700 active:border-stone-700 hover:bg-stone-700 hover:border-stone-700 disabled:opacity-50 {$$props.class}"
  {disabled}>
  {text}
</button>
