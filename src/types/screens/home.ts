import { Document } from 'prismic-javascript/types/documents'
import { PrismicImage } from 'types/prismic/prismicImage'

export interface Home extends Document {
  data: {
    title: string
    hero_image_primary: PrismicImage
    hero_image_secondary: PrismicImage
    hero_image_cursor_left: PrismicImage
    body: any[]
  }
}
