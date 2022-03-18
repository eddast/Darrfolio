import { TextReveal } from 'components/reveal/headingReveal/headingReveal'
import { RichContent } from 'components/richContent/richContent'
import { motion } from 'framer-motion'
import { RichTextBlock } from 'prismic-reactjs'
import { FC } from 'react'
import { InView } from 'react-intersection-observer'
import { isNotEmptyPrismicImage, PrismicImage } from 'types'
import { Box, ImageBox, Text } from 'ui/core'

interface Props {
  title: string
  text: RichTextBlock[]
  image: PrismicImage
  right?: boolean
}

/**
 * Tekur inn prismic slice af taginu image text og birtir accordingly
 * Þarft svosem ekki að pæla mikið í því
 */
export const ImageTextSlice: FC<any> = (slice) => (
  <ImageText
    title={slice?.primary?.title}
    right={slice?.primary?.right}
    text={slice?.primary?.text}
    image={slice?.primary?.image}
  />
)
export const ImageText: FC<Props> = ({ title, right, text, image }) => (
  <>
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref }) => {
        return (
          <Box
            ref={ref}
            mb={[0, 0, 2, 2, 14, 20]}
            py={[2, 2, 8]}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={[
              'column-reverse',
              'column-reverse',
              'column-reverse',
              right ? 'row-reverse' : 'row',
            ]}
          >
            <Box width={['full', 'full', 'full', '5/12']}>
              <TextReveal
                animate={inView}
                variant="h2"
                pb={4}
                firstLine={title || ''}
                delay={0.2}
              />
              <Text>
                <motion.div
                  animate={
                    !inView ? { y: 30, opacity: 0 } : { y: 0, opacity: 1 }
                  }
                  initial={{ y: 30, opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <RichContent content={text} />
                </motion.div>
              </Text>
            </Box>
            <Box width={['full', 'full', 'full', '5/12']} position="relative">
              {image && isNotEmptyPrismicImage(image) && (
                <motion.div
                  animate={!inView ? { scale: 0 } : { scale: 1 }}
                  initial={{ scale: 0 }}
                  transition={{ delay: 0, duration: 0.6 }}
                >
                  <ImageBox
                    image={image.url}
                    alt={image.alt || ''}
                    borderRadius="small"
                    height={['100%', '80%', '60%', '90%']}
                  />
                </motion.div>
              )}
            </Box>
          </Box>
        )
      }}
    </InView>
  </>
)
