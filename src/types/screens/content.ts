import { Document } from 'prismic-javascript/types/documents'
import { PrismicImage } from 'types/prismic/prismicImage'
import { PrismicRichText } from 'types/prismic/prismicRichText'

export interface ContentPage extends Document {
  data: {
    title: string
    title_secondary: string
    hero_text: PrismicRichText
    hero_image: PrismicImage
    body: any[]
  }
}
