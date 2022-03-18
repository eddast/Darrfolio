import { Document } from 'prismic-javascript/types/documents'
import { PrismicImage } from 'types/prismic/prismicImage'
import { PrismicRichText } from 'types/prismic/prismicRichText'

export interface Home extends Document {
  data: {
    title: string
    hero_title: string
    hero_title_secondary: string
    hero_text: PrismicRichText
    hero_image: PrismicImage
    body: any[]
  }
}
