import { Document } from 'prismic-javascript/types/documents'
import { Link } from 'prismic-reactjs'

export interface Header extends Document {
  data: {
    title: string
    social_medias: { link: Link }[]
  }
}
