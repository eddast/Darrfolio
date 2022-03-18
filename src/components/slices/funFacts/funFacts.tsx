import { TextReveal } from 'components/reveal/headingReveal/headingReveal'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { InView } from 'react-intersection-observer'
import styled from 'styled-components'
import { isNotEmptyPrismicImage, PrismicImage } from 'types'
import { Box, Container, GridColumn, GridRow, ImageBox, Text } from 'ui/core'

interface Props {
  title: string
  items: { icon: PrismicImage; fact: string }[]
}

export const OverflowHiddenGridCol = styled(GridColumn)`
  overflow: hidden;
`

/**
 * Tekur inn prismic slice af taginu fun facts og birtir accordingly
 * Þarft svosem ekki að pæla mikið í því
 */
export const FunFactsSlice: FC<any> = (slice) => (
  <FunFacts title={slice?.primary?.facts_title} items={slice?.items || []} />
)

export const FunFacts: FC<Props> = ({ title, items }) => (
  <InView triggerOnce threshold={0.5}>
    {({ inView, ref }) => {
      return (
        <Box
          position="relative"
          width="full"
          ref={ref}
          my={[6, 6, 6, 0]}
          py={[2, 4, 6]}
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
                  item.icon &&
                  isNotEmptyPrismicImage(item.icon) && (
                    <OverflowHiddenGridCol
                      key={`img-grid-${index}`}
                      width={['full', 'full', '1/2', '4/12']}
                      pushBottom
                    >
                      <motion.div
                        style={{ height: '100%' }}
                        animate={
                          !inView ? { y: 30, opacity: 0 } : { y: 0, opacity: 1 }
                        }
                        initial={{ y: 30, opacity: 0 }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          height="full"
                          py={2}
                          px={4}
                          my={2}
                          bg="background"
                          borderRadius="small"
                        >
                          <img src={item.icon.url || ''} height={60} />
                          <Text
                            variant="textSmall"
                            pl={3}
                            m={0}
                            color="primary500"
                          >
                            {item.fact}
                          </Text>
                        </Box>
                      </motion.div>
                    </OverflowHiddenGridCol>
                  ),
              )}
            </GridRow>
          </Container>
        </Box>
      )
    }}
  </InView>
)
