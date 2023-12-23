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
  id="contact-form"
  action="https://api.web3forms.com/submit"
  method="POST"
  class="flex flex-col gap-8 w-full {errorMessage !== '' && 'text-red-700'}"
  on:submit|preventDefault={handleSubmit}
>
  <Web3formsConfig {API_KEY} />

  <fieldset>
    <label>
      Name*
      <input placeholder=" " type="text" id="name" required />
    </label>
  </fieldset>

  <fieldset>
    <label>
      Email*
      <input placeholder=" " type="email" name="email" id="email" required />
    </label>
  </fieldset>

  <fieldset>
    <label>
      Message*
      <textarea
        name="message"
        class="min-h-[2rem] h-8 overflow-hidden"
        style:height={`${textareaHeight}px`}
        on:input={resizeTextarea}
        required
      />
    </label>
  </fieldset>

  <fieldset>
    <label class="!text-base !font-normal inline-flex gap-4 items-center">
      <input
        placeholder=" "
        type="checkbox"
        class="appearance-none border-2 border-current w-8 h-8 aspect-square relative after:absolute after:left-1/2 after:top-[45%] checked:bg-current checked:after:content-[''] checked:after:border-green-400 checked:after:border-r-4 checked:after:border-b-4 checked:after:rotate-45 checked:after:w-2/5 checked:after:h-4/5 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 dark:checked:after:border-neutral-800"
        required
      />
      I agree with the storage and processing of my personal data
    </label>
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
    class="text-green-400 dark:text-black-400 dark:bg-green-400 dark:border-green-400 dark:hover:border-green-600 dark:hover:bg-green-600 dark:active:border-green-600 dark:active:bg-green-600 uppercase !text-xl !px-6"
    disabled={status === 'pending...' || status === 'finish'}
  />
</form>

<style lang="postcss">
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
  input:-webkit-autofill:active,
  input:-internal-autofill-selected {
    transition: background-color 5000s;
    -webkit-text-fill-color: theme('colors.black.500') !important;
    border-color: theme('colors.black.500') !important;
  }

  :is(.dark input:-webkit-autofill),
  :is(.dark input:-webkit-autofill:hover),
  :is(.dark input:-webkit-autofill:focus),
  :is(.dark input:-webkit-autofill:active),
  :is(.dark input:-internal-autofill-selected) {
    transition: background-color 5000s;
    -webkit-text-fill-color: theme('colors.slate.200') !important;
    border-color: theme('colors.slate.200') !important;
  }

  label {
    @apply text-xl -mb-5 text-current font-semibold transition-all;
  }

  input:focus,
  textarea:focus {
    @apply outline-1;
  }

  fieldset:valid label,
  label:focus {
    @apply text-sm font-normal;
  }

  label:not(:placeholder-shown):invalid {
    @apply font-normal;
  }
</style>
