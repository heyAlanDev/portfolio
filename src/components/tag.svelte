<script lang="ts">
  export let text: string
  export let shadow: boolean = false
</script>

<span
  class="rounded-3xl font-medium text-sm py-1 px-3 max-w-fit shadow-lg capitalize bg-stone-800 text-white {$$props.class}"
  class:shadow-stone-500={shadow}
>
  {text}
</span>
