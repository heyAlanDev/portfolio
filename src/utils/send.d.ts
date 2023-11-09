// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type Web3FormsResponse = {
  success: boolean
  data: Data
  message: string
}

export interface Data {
  subject: string
  from_name: string
  name: string
  email: string
  message: string
  'terms-conditions': string
}
