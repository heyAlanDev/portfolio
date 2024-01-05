import type { I18N } from './translations-json'

import spanish from './es.json'
import english from './en.json'

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en'
}

export const getI18N = (currentLanguage?: string): I18N => {
  if (currentLanguage === LANGUAGES.ENGLISH) return english
  if (currentLanguage === LANGUAGES.SPANISH) return spanish
  return english
}
