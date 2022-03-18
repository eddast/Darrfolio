import React, { FC } from 'react'
import { Image } from '../image/image'
import {
  ImageBoxProps,
  StyledImageBox,
  StyledImageBoxOverlay,
} from './imageBox.styles'
import { getPrismicImage, PrismicImage as PrismicImageType } from 'types'
import { ThemeResponsiveProp } from 'ui/theme'
import { Box } from '../box/box'

type Props = ImageBoxProps & {
  bg?: string
  borderRadius?: ThemeResponsiveProp<string>
  image: string
  alt: string
  objectFit?: NonNullable<JSX.IntrinsicElements['img']['style']>['objectFit']
  objectPosition?: NonNullable<
    JSX.IntrinsicElements['img']['style']
  >['objectPosition']
  overlay?: string
}

export const ImageBox: FC<Props> = ({
  height,
  bg,
  borderRadius,
  image,
  overlay,
  children,
  ...rest
}) => {
  return (
    <StyledImageBox bg={bg} pt={height} borderRadius={borderRadius}>
      {/* Background gradient */}
      {overlay && (
        <StyledImageBoxOverlay
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          background={overlay}
          zIndex="1"
        />
      )}
      <Image src={image} priority fill {...rest} />
      {children && (
        <Box position="relative" zIndex="2">
          {children}
        </Box>
      )}
    </StyledImageBox>
  )
}

type PrismicImageProps = Omit<Props, 'image' | 'alt'> & {
  image: PrismicImageType
}

export const PrismicImageBox: FC<PrismicImageProps> = ({ image, ...props }) => {
  return (
    <ImageBox
      image={getPrismicImage(image)?.url || ''}
      alt={getPrismicImage(image)?.alt || ''}
      {...props}
    />
  )
}
