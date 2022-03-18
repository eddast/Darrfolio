import React, { FC } from 'react'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { RichContent } from 'components/richContent/richContent'
import NextImage from 'next/image'
import { isNotEmptyPrismicImage, PrismicImage } from 'types'
import { Box, Container, ImageBox, Text } from 'ui/core'
import { TextReveal } from 'components/reveal/headingReveal/headingReveal'
import { motion } from 'framer-motion'

export const PageIntro: FC<{
  uid?: string
  title?: RichTextBlock[] | string
  secondaryTitle?: RichTextBlock[] | string
  text?: RichTextBlock[]
  image?: PrismicImage
}> = ({ title, secondaryTitle, text, image }) => (
  <Box
    pt={[2, 2, 2, 6]}
    display="flex"
    flexWrap="wrap"
    justifyContent="space-between"
    alignItems="center"
  >
    <Box
      width={['full', 'full', 'full', '5/12']}
      display="flex"
      flexDirection="column"
      order={[2, 2, 2, 1]}
    >
      <TextReveal
        animate
        variant="h1"
        firstLine={Array.isArray(title) ? RichText.asText(title) : title || ''}
        secondLine={
          Array.isArray(secondaryTitle)
            ? RichText.asText(secondaryTitle)
            : secondaryTitle || ''
        }
      />

      {text && text.length > 0 && (
        <Box pt={[0, 4]} pb={[4, 2]} order={[3, 2]}>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <RichContent content={text} />
          </motion.div>
        </Box>
      )}
    </Box>
    <Box
      width={['full', 'full', 'full', '1/2', '5/12']}
      order={[1, 1, 1, 2]}
      mb={[4, 4, 4, 0]}
    >
      {image && isNotEmptyPrismicImage(image) && (
        <Box width="full" height="full">
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ImageBox
              image={image.url || ''}
              alt={image.alt || ''}
              height={['100%', '80%', '80%', '100%', '120%']}
            />
          </motion.div>
        </Box>
      )}
    </Box>
  </Box>
)
