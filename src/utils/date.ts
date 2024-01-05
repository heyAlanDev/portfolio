import { getI18N } from 'src/i18n'

export const currentYear = new Date().getFullYear()

export const shortFormatDate = (date: string, locale?: string): string => new Intl.DateTimeFormat(locale ?? 'en', { month: 'short', year: 'numeric' }).format(new Date(date))

// FIXME: Fix the substractDate function return units

export const substractDate = (date1: string, date2: string, locale: string = 'en'): string => {
  const translates = getI18N(locale)
  const date1Obj = new Date(date1)
  const date2Obj = new Date(date2)

  const diffInMilliseconds = date1Obj.getTime() - date2Obj.getTime()
  const diffInYears = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365))
  const diffInMonths = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30))
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))

  if (diffInYears > 0) {
    if (diffInYears > 1 && diffInMonths > 0) {
      return `${diffInYears} ${diffInYears > 1 ? translates.YEARS : translates.YEAR} ${translates.AND} ${diffInMonths > 1 ? translates.MONTHS : translates.MONTH}`
    } else {
      return `${diffInYears} ${diffInYears > 1 ? translates.YEARS : translates.YEAR}`
    }
  } else if (diffInMonths > 0) {
    return `${diffInMonths} ${diffInMonths > 1 ? translates.MONTHS : translates.MONTH}`
  } else {
    return `${diffInDays} ${diffInDays > 1 ? translates.DAYS : translates.DAY}`
  }
}
