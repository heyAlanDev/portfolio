import type { Web3FormsResponse } from './send'

export const sendEmail: (data: FormData) => Promise<boolean> = async data => {
  const formObject = Object.fromEntries(data)
  const formJson = JSON.stringify(formObject)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: formJson
    })

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      return false
    }

    const result: Web3FormsResponse = await response.json()
    const { success } = result

    return success
  } catch (error) {
    // Maneja cualquier error que ocurra durante la solicitud
    console.error('Error en la solicitud:', error)
    return false
  }
}
