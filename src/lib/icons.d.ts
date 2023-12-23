import type icons from '@lib/icons.json'

declare interface IconType {
  box: number
  svg: string
}

declare type IconName = keyof typeof icons

export type { IconType, IconName }
