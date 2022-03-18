import { Document } from 'prismic-javascript/types/documents'
import { Link } from 'prismic-reactjs'

export interface Footer extends Document {
  data: {
    footer_text: string
    footer_email: string
    links: {
      link_label: string
      link: Link
    }[]
    button_link: Link
    button_text: string
    social_medias: { icon: string; link: Link }[]
  }
}
