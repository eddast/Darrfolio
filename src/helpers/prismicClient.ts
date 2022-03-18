/**
 * Client til að queria prismic
 */
import { CMS_BASE_URL } from '../const'
import Prismic from 'prismic-javascript'
import ResolvedApi from 'prismic-javascript/types/ResolvedApi'

export const accessToken = ''
let apiClient: ResolvedApi | null = null

const createClientOptions = (req = null, prismicAccessToken: string) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption =
    prismicAccessToken.length > 0 ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const Client = (req = null) =>
  Prismic.client(CMS_BASE_URL, createClientOptions(req, accessToken))

export const getPrismicApi = async () => {
  if (apiClient) return apiClient
  apiClient = await Prismic.getApi(CMS_BASE_URL, {})
  return apiClient
}
