import { GetStaticProps } from 'next'
import Prismic from 'prismic-javascript'
import { Client } from 'helpers'
import { CMS_BASE_URL } from 'const'
import { getLayoutProps } from 'layouts'
import { Content } from 'screens/content/content'

export async function getStaticPaths() {
  const API = await Prismic.getApi(CMS_BASE_URL, {})
  const allPages = await API.query(
    Prismic.Predicates.at('document.type', 'content_page'),
  )
  return {
    paths: allPages.results.map((page) => ({
      params: {
        uid: page.uid || '',
      },
    })),
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = Client()
  const layoutProps = await getLayoutProps(client, ctx)
  const page = await client.getByUID(
    'content_page',
    (ctx.params?.uid as string) || '',
    {},
  )
  if (!page?.data)
    return {
      notFound: true,
      props: {
        ...layoutProps,
      },
    }

  return {
    revalidate: 60,
    props: {
      page,
      ...layoutProps,
    },
  }
}

export default Content
