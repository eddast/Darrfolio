import { Document } from 'prismic-javascript/types/documents'
import { Link } from 'prismic-reactjs'

export interface Footer extends Document {
  data: {
    contact_text: string
    contact_button_text: string
    contact_button_link: Link
    contact_email: string
  }
}
