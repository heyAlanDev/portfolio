import type { IconName } from './icons'

declare interface Image {
  imgUrl: string
  imgAlt: string
}

declare type Images = [] | [Image] | [Image, Image]

declare interface LinkProject {
  type: 'code' | 'case' | 'demo'
  link: string | null
  target?: '_self' | '_blank' | '_parent' | '_top'
}

declare interface Project {
  name: string
  description: string | null
  links: LinksProject
  techs: IconName[] | string[]
  status: ProjectStatus | string
  category?: string | undefined
  industry?: string | undefined
}

declare interface LatestProject extends Project {}

declare interface FavoriteProject extends Project {
  imgPosition?: 'left' | 'right'
  color?: string
}

declare type LinksProject = [LinkProject, LinkProject, LinkProject]

declare type ProjectStatus = 'Planning' | 'In Progress' | 'Backlog' | 'Completed' | 'Cancelled' | 'Paused' | 'On Hold' | undefined

export type { Image, Images, LinkProject, LinksProject, ProjectStatus, LatestProject, FavoriteProject }
