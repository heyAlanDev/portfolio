<script lang="ts">
  let textareaHeight = 0

  const resizeTextarea: (e: Event) => void = (e: Event) => {
    const { value, scrollHeight } = e.target as HTMLTextAreaElement

    if (value === '') return (textareaHeight = 0)
    textareaHeight = scrollHeight
  }
</script>

<section class="w-full">
  <form class="flex flex-col gap-8">
    <fieldset>
      <input placeholder=" " type="text" name="name" id="name" required />
      <label for="name">Name*</label>
    </fieldset>

    <fieldset>
      <input placeholder=" " type="email" name="email" id="name" required />
      <label for="email">Email*</label>
    </fieldset>
    <fieldset>
      <textarea
        name="message"
        id="message"
        class="min-h-[2rem] h-8 overflow-hidden"
        style:height={`${textareaHeight}px`}
        on:input={resizeTextarea}
        required
      />
      <label for="message">Message*</label>
    </fieldset>

    <fieldset class="!flex-row-reverse gap-4">
      <label for="terms-conditions" class="!text-base !font-normal">
        I agree with the storage and processing of my personal data
      </label>
      <input placeholder=" "
        type="checkbox"
        name="terms-conditions"
        id="terms-conditions"
        class="appearance-none border-2 border-current invalid:!border-[#0e1716] w-8 h-8 aspect-square checked:bg-[#0e1716] checked:after:content-[''] checked:after:absolute checked:after:border-blue-400 checked:after:border-r-4 checked:after:border-b-4 checked:after:rotate-45 checked:after:w-[.5em] checked:after:h-[1em] checked:after:translate-x-2 checked:after:translate-y-0.5"
        required
      />
    </fieldset>

    <button
      class="px-4 py-4 font-semibold text-2xl rounded-full border-2 border-current w-full"
    >
      Ten tu abrazo Alan
    </button>
  </form>
</section>

<style>
  fieldset {
    @apply flex flex-col-reverse;
  }

  textarea,
  input:not([type='checkbox']) {
    @apply text-lg font-semibold w-full border-b-2 border-current bg-transparent;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: currentColor !important;
  }

  label {
    @apply text-xl -mb-5 text-current font-semibold transition-all;
  }

  input:focus,
  textarea:focus {
    @apply outline-none;
  }

  fieldset:valid label,
  input:focus ~ label,
  textarea:focus ~ label {
    @apply text-sm text-slate-950 font-normal m-0;
  }

  
  input:not(:placeholder-shown):invalid,
  input:not(:placeholder-shown):invalid ~ label {
    @apply text-red-700;
  }

  input:not(:placeholder-shown):invalid ~ label {
    @apply font-normal m-0;
  }
</style>
