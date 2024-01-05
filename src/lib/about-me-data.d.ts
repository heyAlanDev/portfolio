export interface AboutMeData {
  ACHIEVEMENTS: Achievement[]
  SOCIAL_NETWORKS: SocialNetwork[]
  certifications: Certification[]
}

export interface Achievement {
  value: string
  description: string
}

export interface SocialNetwork {
  to: string
  social: string
  color: string
}

export interface Certification {
  name: string
  image: string
  link: string
  initDate: string
  endDate: string
  issuedBy: string
}
