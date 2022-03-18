import { htmlSerializer } from 'helpers'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import React, { FC } from 'react'

interface Props {
  content: RichTextBlock[]
}

/**
 * Prismic specific component
 * Parsar rich content í rich content editor með að nota html serializer (sjá comment þar)
 * Pretty much virkar eins og interweave
 */
export const RichContent: FC<Props> = ({ content }) => {
  return <RichText render={content} htmlSerializer={htmlSerializer} />
}
