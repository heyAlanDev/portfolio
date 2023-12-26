import type { APIGraphQlGithubResponse } from '@lib/api-github-response'
import type { FavoriteProject, LatestProject } from '@lib/projects'
import type { ObjectFile } from '../api-github-response'

const APIGITHUB_GRAPQL_URL = 'https://api.github.com/graphql'

export async function getUsername(): Promise<string> {
  const res = await fetch(APIGITHUB_GRAPQL_URL, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${import.meta.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      query: `
      query {
        viewer {
          login
        }
      }`
    })
  })

  const { data }: APIGraphQlGithubResponse = await res.json()
  const { login: username } = data.viewer

  return username
}

export const getRepoFile = async (
  name: string,
  username: string,
  file: string
): Promise<ObjectFile | null> => {
  const res = await fetch(APIGITHUB_GRAPQL_URL, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${import.meta.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      query: `
      query {
        repository(name: ${name}, owner: ${username}) {
          object(expression: "HEAD:${file}") { ... on Blob { text } } 
        }
      }`
    })
  })
  const { data }: APIGraphQlGithubResponse = await res.json()

  return data.repository.object
}

export async function getLatestRepos(limit = 15): Promise<LatestProject[]> {
  const res = await fetch(APIGITHUB_GRAPQL_URL, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${import.meta.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      query: `
      query {
        viewer {
          repositories(first: ${limit}, orderBy: {field: UPDATED_AT, direction: DESC}) {
            totalCount
            nodes {
              name
              url
              description
              homepageUrl
              createdAt
              updatedAt
              repositoryTopics(first: 15) {
                totalCount
                nodes { topic { name } }
              }
              languages(first: 100) {
                nodes {
                  name
                  color
                }
              }
            }
          }
        }
      }`
    })
  })

  const { data }: APIGraphQlGithubResponse = await res.json()
  const { nodes } = data.viewer.repositories

  const latestProjects: LatestProject[] = nodes.map(project => {
    const { nodes: topics } = project.repositoryTopics
    const { nodes: techsArr } = project.languages

    const status = topics
      .find(({ topic }) => topic.name.split('/')[0] === 'status')
      ?.topic.name.split('/')[1]

    const techs = techsArr.map(({ name }) => name.toLowerCase())

    return {
      name: project.name,
      description: project.description,
      techs,
      links: [
        { link: project.url, type: 'code' },
        { link: project.homepageUrl, type: 'demo' },
        {
          link: null,
          type: 'case'
        }
      ],
      status
    }
  })

  return latestProjects
}

export async function getPinnedRepos(limit = 5): Promise<FavoriteProject[]> {
  const res = await fetch(APIGITHUB_GRAPQL_URL, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${import.meta.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      query: `
      query {
        viewer {
          pinnedItems(last: ${limit}, types: [REPOSITORY, GIST]) {
            totalCount
            nodes {
              ... on Repository {
                name
                url
                description
                homepageUrl
                createdAt
                updatedAt
                repositoryTopics(first: 15) {
                  totalCount
                  nodes { topic { name } }
                }
                languages(first: 100) {
                  nodes {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }`
    })
  })
  const { data }: APIGraphQlGithubResponse = await res.json()
  const { nodes } = data.viewer.pinnedItems

  const favoritesProjects: FavoriteProject[] = nodes.map(project => {
    const { nodes: topics } = project.repositoryTopics
    const { nodes: techsArr } = project.languages

    const status = topics
      .find(({ topic }) => topic.name.split('/')[0] === 'status')
      ?.topic.name.split('/')[1]

    const category = topics
      .find(({ topic }) => topic.name.split('/')[0] === 'category')
      ?.topic.name.split('/')[1]

    const industry = topics
      .find(({ topic }) => topic.name.split('/')[0] === 'industry')
      ?.topic.name.split('/')[1]

    const color = topics
      .find(({ topic }) => topic.name.split('/')[0] === 'color')
      ?.topic.name.split('/')[1]

    const imgWidth = topics
      .find(({ topic }) => topic.name.split('/')[0] === 'imgSize')
      ?.topic.name.split('/')[1]

    const imgPosition = topics
      .find(({ topic }) => topic.name.split('/')[0] === 'imgPosition')
      ?.topic.name.split('/')[1]

    const techs = techsArr.map(({ name }) => name.toLowerCase())

    return {
      name: project.name,
      description: project.description,
      techs,
      links: [
        { link: project.url, type: 'code' },
        { link: project.homepageUrl, type: 'demo' },
        {
          link: null,
          type: 'case'
        }
      ],
      status,
      category,
      industry,
      color,
      imgPosition,
      imgWidth
    }
  })

  return favoritesProjects
}
