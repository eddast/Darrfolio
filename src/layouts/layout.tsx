/**
 * LAYOUT ER MJÖG MIKILVÆGUR COMPONENT
 * Það enwrappar öllu appinu í haus og fót
 * Hér í get layout props er ég statically að ná í allt
 * sem ég þarf í Prismic til að nota til að byggja header og footer
 * Það þýðir að það cacheast á production og verður sjúklega snappy
 */
import React, { FC, useRef } from 'react'
import { GetStaticPropsContext, NextPage } from 'next'
import { DefaultClient } from 'prismic-javascript/types/client'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'
import ErrorBoundary from 'components/errorBoundary/errorBoundary'
import { Box } from 'ui/core'
import { FallbackScreen, Header } from 'components'
import { Footer as FooterType, Header as HeaderType } from 'types'
import { Footer } from 'components/footer/footer'

export type LayoutProps = {
  footer: FooterType | null
  header: HeaderType | null
}

export type PreviewData = {
  [key: string]: string | number | string[]
}

export type LayoutScreenProps<T> = T

export const getLayoutProps = async (
  client: DefaultClient,
  ctx: GetStaticPropsContext<ParsedUrlQuery>,
) => {
  const footer = await client.getSingle('footer', {}).catch((e) => null)
  const header = await client.getSingle('header', {}).catch((e) => null)
  return {
    footer,
    header,
  }
}

export const getLayout = (page: JSX.Element, props: LayoutProps) => {
  return (
    <Layout footer={props.footer} header={props.header}>
      <ErrorBoundary>{page}</ErrorBoundary>
    </Layout>
  )
}

export type GetLayout = typeof getLayout

// eslint-disable-next-line
export type LayoutScreen<T = {}> = NextPage<LayoutScreenProps<T>> & {
  getLayout?: GetLayout
}

export const withLayout = <T,>(Component: NextPage<LayoutScreenProps<T>>) => {
  const LayoutHOC = (props: LayoutScreenProps<T & LayoutProps>) => {
    return (
      <Layout footer={props.footer || null} header={props.header || null}>
        <ErrorBoundary>
          {/* TODO: screen helmet */}
          <Box {...props}>
            <Component {...props} />
          </Box>
        </ErrorBoundary>
      </Layout>
    )
  }

  return LayoutHOC
}

export const Layout: FC<LayoutProps> = ({ header, footer, children }) => {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  if (router.isFallback) return <FallbackScreen />
  return (
    <>
      {header && <Header menu={header} />}
      <Box
        display="flex"
        flexDirection="column"
        minHeight="viewportHeight"
        overflowX="hidden"
      >
        <Box width="viewportWidth" overflowX="hidden">
          <main id="main-content">{children}</main>
        </Box>
        {footer && <Footer footer={footer} />}
      </Box>
    </>
  )
}
