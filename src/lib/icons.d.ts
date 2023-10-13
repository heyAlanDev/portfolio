import type icons from '@lib/icons.json'

declare interface Icon {
  box: number
  svg: string
}

declare type IconName = keyof typeof icons

export type { Icon, IconName }
