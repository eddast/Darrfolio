import { TextReveal } from 'components/reveal/headingReveal/headingReveal'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { InView } from 'react-intersection-observer'
import styled, { css } from 'styled-components'
import { isNotEmptyPrismicImage, PrismicImage } from 'types'
import { Box, Container, GridColumn, GridRow, ImageBox } from 'ui/core'
import { media } from 'ui/utils/lib/mediaQuery'

interface Props {
  title: string
  items: { image: PrismicImage }[]
  pushUp: boolean
}

export const PushUpContainer = styled(Box)<{ pushUp: boolean }>`
  ${({ pushUp }) =>
    pushUp &&
    css`
      ${media.desktopSmallUp} {
        margin-top: -100px;
      }
    `}
`

export const OverflowHiddenGridCol = styled(GridColumn)`
  overflow: hidden;
`

/**
 * Tekur inn prismic slice af taginu image grid og birtir accordingly
 * Þarft svosem ekki að pæla mikið í því
 */
export const ImageGridSlice: FC<any> = (slice) => (
  <ImageGrid
    title={slice?.primary?.image_grid_title}
    pushUp={slice?.primary?.image_grid_pushed_up}
    items={slice?.items || []}
  />
)

export const ImageGrid: FC<Props> = ({ title, items, pushUp }) => (
  <InView triggerOnce threshold={0.5}>
    {({ inView, ref }) => {
      return (
        <PushUpContainer
          pushUp={pushUp}
          position="relative"
          width="full"
          ref={ref}
          my={[6, 6, 6, 0]}
          py={[10, 10, 10, 20]}
          bg="background"
          zIndex="-1"
        >
          <Container>
            <TextReveal
              pb={[4, 4, 6, 8]}
              animate={inView}
              variant="h2"
              firstLine={title || ''}
              delay={0.2}
            />
            <GridRow>
              {items.map(
                (item, index) =>
                  item.image &&
                  isNotEmptyPrismicImage(item.image) && (
                    <OverflowHiddenGridCol
                      key={`img-grid-${index}`}
                      width={['full', '1/2', '4/12', '3/12', '2/10']}
                    >
                      <motion.div
                        animate={
                          !inView ? { y: 30, opacity: 0 } : { y: 0, opacity: 1 }
                        }
                        initial={{ y: 30, opacity: 0 }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                      >
                        <Box p={6} opacity={0.4}>
                          <ImageBox
                            height={'40%'}
                            image={item.image.url}
                            alt={item.image.alt || ''}
                          />
                        </Box>
                      </motion.div>
                    </OverflowHiddenGridCol>
                  ),
              )}
            </GridRow>
          </Container>
        </PushUpContainer>
      )
    }}
  </InView>
)
