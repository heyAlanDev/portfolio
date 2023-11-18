<script lang="ts">
  import Button from './button.svelte'
  import { sendEmail } from '@utils/send-mail'
  import { launchMessage } from '@utils/launch-message'
  import Web3formsConfig from '@lib/web3forms-config.svelte'
  import OrbitalSpinner from './orbital-spinner.svelte'
  import { fade } from 'svelte/transition'

  export let API_KEY = ''

  let textareaHeight = 0
  let status: 'nothing' | 'pending...' | 'finish' | 'resolved' = 'nothing'
  let errorMessage = ''
  let mailResponse = false

  const resizeTextarea: (e: Event) => void = (e: Event) => {
    const { value, scrollHeight } = e.target as HTMLTextAreaElement

    if (value === '') return (textareaHeight = 0)
    textareaHeight = scrollHeight
  }

  const handleSubmit = (e: SubmitEvent): void => {
    const form = e.currentTarget as HTMLFormElement
    if (form === null) return
    status = 'pending...'

    const formData = new FormData(form)

    sendEmail(formData)
      .then(async response => {
        if (!response) {
          errorMessage = 'The form contact has a problem, try again later'
          mailResponse = response

          try {
            return await launchMessage(errorMessage, 10000)
          } finally {
            status = 'finish'
          }
        }

        mailResponse = response
        form.reset()
        status = 'finish'
        await launchMessage('All has gone fine', 10000)
      })
      .catch(async _e => {
        console.error(_e)

        await launchMessage(
          'The contact form has problem, try more later',
          3000
        ).then(message => (errorMessage = message))
      })
      .finally(() => {
        status = 'resolved'
        errorMessage = ''
      })
  }
</script>

<form
  id="contact"
  action="https://api.web3forms.com/submit"
  method="POST"
  class="flex flex-col gap-8 w-full {errorMessage !== '' && 'text-red-700'}"
  on:submit|preventDefault={handleSubmit}
>
  <Web3formsConfig {API_KEY} />

  <fieldset>
    <input placeholder=" " type="text" name="name" id="name" required />
    <label for="name">Name*</label>
  </fieldset>

  <fieldset>
    <input placeholder=" " type="email" name="email" id="email" required />
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

  <fieldset class="!flex-row-reverse gap-4 self-start">
    <label for="terms-conditions" class="!text-base !font-normal">
      I agree with the storage and processing of my personal data
    </label>
    <input
      placeholder=" "
      type="checkbox"
      name="terms-conditions"
      id="terms-conditions"
      class="appearance-none border-2 border-current border-[#0e1716] w-8 h-8 aspect-square checked:bg-[#0e1716] checked:after:content-[''] checked:after:absolute checked:after:border-blue-400 checked:after:border-r-4 checked:after:border-b-4 checked:after:rotate-45 checked:after:w-[.5em] checked:after:h-[1em] checked:after:translate-x-2 checked:after:translate-y-0.5"
      required
    />
  </fieldset>

  <div class="flex w-full gap-4 justify-end">
    {#if (status !== 'resolved' && status !== 'nothing') || errorMessage !== ''}
      <OrbitalSpinner />
    {/if}

    {#if (errorMessage !== '' || !mailResponse) && status !== 'resolved'}
      <span class="text-xl font-semibold">{errorMessage}</span>
    {/if}

    {#if (errorMessage === '' || mailResponse) && status === 'finish'}
      <img
        src="assets/thanks-for-huge.svg"
        alt="Thanks for the huge"
        class="w-40 -my-16 z-10"
        transition:fade
      />
    {/if}
  </div>
  <Button
    text="Ten tu abrazo Alan"
    class="text-blue-400 uppercase !text-xl !px-6"
    disabled={status === 'pending...' || status === 'finish'}
  />
</form>

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
    @apply text-sm font-normal m-0;
  }

  input:not(:placeholder-shown):invalid ~ label {
    @apply font-normal m-0;
  }
</style>
