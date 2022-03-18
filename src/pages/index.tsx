import { Client } from 'helpers/prismicClient'
import Prismic from 'prismic-javascript'
import { getLayoutProps } from 'layouts'
import { GetStaticProps } from 'next'
import { Home } from 'screens'
import { CMS_BASE_URL } from 'const'

/**
 * Index er rótin á the routes, þannig þetta er forsíðan
 * Hér sæki ég síðuna í Prismic og injecta í Home Screenið
 * Þannig er ég að birta forsíðuna og ná í gildin í hana.
 *
 * -----
 *
 * Okei, hér er the winner; get static props er server side
 * og náð í statically þegar verkefnið í buildar sem þýðir
 * að öll gögn eru cached og þá verður síðan svo foooookking snappy
 * að hún basically lookar fake. Þetta er why að nextjs er svo kúl
 */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = Client()

  // Næ líka í layout props fyrir hverja síðu sem notar layout, e.g. haus og fót
  const layoutProps = await getLayoutProps(client, ctx)
  const page = await client.getSingle('front_page', {})

  console.log(page)

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

export default Home
