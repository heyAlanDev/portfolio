export interface APIGraphQlGithubResponse {
  data: Data
}

export interface Data {
  viewer: Viewer
  repository: Repository
}

export interface Viewer {
  login: string
  repositories: RepositoriesResponse
  pinnedItems: RepositoriesResponse
}

export interface Repository {
  object: ObjectFile | null
}

export interface RepositoriesResponse {
  totalCount: number
  nodes: RepositoryResponse[]
}

export interface RepositoryResponse {
  name: string
  url: string
  description: null | string
  hasWikiEnabled: boolean
  homepageUrl: null | string
  createdAt: Date
  updatedAt: Date
  repositoryTopics: RepositoryResponseTopics
  languages: Languages
}

export interface Languages {
  nodes: LanguagesNode[]
}

export interface LanguagesNode {
  name: string
  color: string
}

export interface ObjectFile {
  text: string
}

export interface RepositoryResponseTopics {
  totalCount: number
  nodes: RepositoryResponseTopicsNode[]
}

export interface RepositoryResponseTopicsNode {
  topic: Topic
}

export interface Topic {
  name: string
}
