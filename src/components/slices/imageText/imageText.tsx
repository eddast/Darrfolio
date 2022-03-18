import { RichContent } from 'components/richContent/richContent'
import { RichTextBlock } from 'prismic-reactjs'
import { FC } from 'react'
import { isNotEmptyPrismicImage, PrismicImage } from 'types'
import { Box, ImageBox, Text } from 'ui/core'

interface Props {
  title: string
  text: RichTextBlock[]
  primaryImage: PrismicImage
  secondaryImage: PrismicImage
  left?: boolean
}

/**
 * Tekur inn prismic slice af taginu image text og birtir accordingly
 * Þarft svosem ekki að pæla mikið í því
 */
export const ImageTextSlice: FC<any> = (slice) => (
  <ImageText
    title={slice?.primary?.image_title}
    left={slice?.primary?.image_left}
    text={slice?.primary?.image_text}
    primaryImage={slice?.primary?.image_primary}
    secondaryImage={slice?.primary?.image_secondary}
  />
)
export const ImageText: FC<Props> = ({ title, left, text, primaryImage }) => (
  <Box
    mb={[0, 0, 2, 2, 14, 20]}
    py={[2, 2, 8]}
    display="flex"
    justifyContent="space-between"
    flexDirection={[
      'column-reverse',
      'column-reverse',
      'column-reverse',
      left ? 'row-reverse' : 'row',
    ]}
  >
    <Box width={['full', 'full', 'full', '5/12']}>
      {title && (
        <Text variant="h2" fontWeight="extraBold" mb={4}>
          {title}
        </Text>
      )}
      <Text>
        <RichContent content={text} />
      </Text>
    </Box>
    <Box width={['full', 'full', 'full', '5/12']} position="relative">
      <Box
        width={['full', 'full', 'full', '9/12']}
        pb={[4, 4, 4, 0]}
        position="relative"
        top={['inherit', 'inherit', 'inherit', -50, -80]}
        left={[
          'inherit',
          'inherit',
          'inherit',
          left ? 'inherit' : 100,
          left ? -100 : 200,
        ]}
      >
        {primaryImage && isNotEmptyPrismicImage(primaryImage) && (
          <ImageBox
            image={primaryImage.url}
            alt={primaryImage.alt || ''}
            borderRadius="small"
            height={['100%', '80%', '60%', '130%']}
          />
        )}
      </Box>
    </Box>
  </Box>
)
