/**
 * Þetta er ekki nextjs specific en tengist Prismic
 * það þarf að mappa síðum á url eftir því hvaða týpu þau eru af
 * UID er unique identifier fyrir allar content typur í prismic
 * -----
 * Hér býst ég við að front_page sé index rótin og custom content pages
 * séu /<slug>
 */

import { Link } from 'prismic-reactjs'

export const resolveLink = (type: string, uid: string) => {
  if (type === 'home') return '/'
  if (type === 'content_page') return `/${uid}`
  return null
}

export const linkResolver = (link: Link) => {
  const resolvedLink = resolveLink(link.type || '', link.uid || '')
  if (link.link_type === 'Web') return link.url || ''
  if (resolvedLink) return resolvedLink
  return link.url || ''
}
