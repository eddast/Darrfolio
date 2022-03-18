import React, { FC } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { getPrismicImage, PrismicImage as PrismicImageType } from 'types'

type LayoutProps =
  | {
      fill?: false
      width: number | string
      height: number | string
    }
  | {
      fill: true
      width?: never
      height?: never
    }

type Props = Omit<ImageProps, 'unsized' | 'src'> & {
  src: string
} & LayoutProps

export const Image: FC<Props> = ({
  fill,
  src,
  width = 0,
  height = 0,
  loading = 'eager',
  placeholder = 'empty',
  objectFit = 'cover',
  ...rest
}) => {
  return fill ? (
    <NextImage
      layout="fill"
      src={src}
      objectFit={objectFit}
      priority={loading === 'eager' ? true : false}
      {...rest}
    />
  ) : (
    <NextImage
      layout="responsive"
      src={src}
      width={width}
      height={height}
      objectFit={objectFit}
      priority={loading === 'eager' ? true : false}
      {...rest}
    />
  )
}

type PrismicImageProps = Omit<Props, 'src' | 'width' | 'height'> & {
  image: PrismicImageType
}

export const PrismicImage: FC<PrismicImageProps> = ({
  image,
  fill,
  ...props
}) => {
  return fill ? (
    <Image src={getPrismicImage(image)?.url || ''} fill {...props} />
  ) : (
    <Image
      src={getPrismicImage(image)?.url || ''}
      width={getPrismicImage(image)?.dimensions?.width || 0}
      height={getPrismicImage(image)?.dimensions?.height || 0}
      {...props}
    />
  )
}
