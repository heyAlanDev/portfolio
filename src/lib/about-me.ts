import { currentYear } from '@utils/date'
import { getAllReposDone } from './services/github'

const ACHIEVEMENTS = [
  {
    value: `${currentYear - 2020}+`,
    description: 'YEARS_EXPERIENCE'
  },
  {
    value: `${await getAllReposDone()}+`,
    description: 'PROJECTS_DONE'
  },
  {
    value: '13+',
    description: 'SATISFIED_CLIENTS'
  }
]
const SOCIAL_NETWORKS = [
  {
    to: '#top',
    social: 'github'
  },
  {
    to: '#top',
    social: 'linkedin'
  },
  {
    to: '#top',
    social: 'twitter-x'
  },
  {
    to: '#top',
    social: 'instagram'
  },
  {
    to: '#top',
    social: 'reddit'
  },
  {
    to: '#top',
    social: 'discord'
  },
  {
    to: '#contact-form',
    social: 'form-textbox'
  }
]

export default { ACHIEVEMENTS, SOCIAL_NETWORKS }
