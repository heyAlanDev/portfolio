export const launchMessage = async (
  message: string,
  delay: number
): Promise<string> => {
  return await new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(message)
    }, delay)
  })
}
