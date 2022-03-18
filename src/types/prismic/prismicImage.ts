export type PrismicImageWithValues = {
  dimensions: {
    width: number
    height: number
  }
  alt: string | null
  copyright: string | null
  url: string
}

export type PrismicImageWithNoValues = Record<never, never>

export type PrismicImage = PrismicImageWithValues | PrismicImageWithNoValues

export const isNotEmptyPrismicImage = (
  image: PrismicImage,
): image is PrismicImageWithValues =>
  (image as PrismicImageWithValues).url !== undefined

export const getPrismicImage = (image: PrismicImage) =>
  isNotEmptyPrismicImage(image) ? image : null
