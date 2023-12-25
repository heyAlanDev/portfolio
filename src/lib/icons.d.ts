import type icons from '@lib/icons.json'

type IconType = Record<string, {
  box: number
  svg: string
}>

declare type IconName = keyof typeof icons

export type { IconType, IconName }
