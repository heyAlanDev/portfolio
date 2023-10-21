<script lang="ts">
  let textareaHeight: number = 0

  const resizeTextarea: () => void = (e: Event) => {
    textareaHeight = (e.target as HTMLTextAreaElement).scrollHeight
  }
</script>

<section class="w-full">
  <form class="flex flex-col gap-8">
    <div>
      <input type="text" name="name" id="name" required />
      <label for="name">Name*</label>
    </div>
    <div>
      <input type="email" name="email" id="name" required />
      <label for="email">Email*</label>
    </div>
    <div>
      <textarea
        name="message"
        id="message"
        class="min-h-[2rem] h-8 overflow-hidden"
        style:height={textareaHeight !== 0 && `${textareaHeight}px`}
        on:input={resizeTextarea}
        required
      />
      <label for="message">Message*</label>
    </div>

    <div class="!flex-row-reverse gap-4">
      <label for="terms-conditions" class="!text-base !font-normal">
        I agree with the storage and processing of my personal data
      </label>
      <input
        type="checkbox"
        name="terms-conditions"
        id="terms-conditions"
        class="appearance-none border-2 border-current w-8 h-8 aspect-square checked:bg-[#0e1716] checked:after:content-[''] checked:after:absolute checked:after:border-blue-400 checked:after:border-r-4 checked:after:border-b-4 checked:after:rotate-45 checked:after:w-[.5em] checked:after:h-[1em] checked:after:translate-x-2 checked:after:translate-y-0.5"
      />
    </div>

    <button
      class="px-4 py-4 font-semibold text-2xl rounded-full border-2 border-current w-full"
    >
      Ten tu abrazo Alan
    </button>
  </form>
</section>

<style>
  div {
    @apply flex flex-col-reverse;
  }

  textarea,
  input:not([type='checkbox']) {
    @apply text-lg w-full border-b-2 border-current bg-transparent;
  }

  label {
    @apply text-xl -mb-5 text-current font-semibold transition-all;
  }

  input:focus,
  textarea:focus {
    @apply outline-none;
  }

  input:focus ~ label,
  input:valid ~ label {
    @apply text-sm text-slate-950 font-normal m-0;
  }
</style>
