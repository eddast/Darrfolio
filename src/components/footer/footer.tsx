import { linkResolver } from 'helpers'
import Link from 'next/link'
import { FC, useRef } from 'react'
import { Box, Container, Text, Anchor, Button } from 'ui/core'
import { Footer as FooterType } from 'types'
import { InView } from 'react-intersection-observer'
import { Dot, LogoText } from 'components/header/header.styles'
import { logoLetterVariants } from 'components/header/header'
import { motion } from 'framer-motion'
import { Darrnimated } from 'components/darrnimated/darrnimated'

/**
 * Vildi ekki vera of brutal að láta þig gera footer svo
 * setti inn smá sætan footer hér
 * PS hversu kúl darrnimated animation ;)
 */
export const Footer: FC<{ footer: FooterType | null }> = ({ footer }) => (
  <InView triggerOnce threshold={0.5}>
    {({ inView, ref }) => (
      <footer ref={ref}>
        <Box
          pt={[18, 16, 10]}
          bg="gray200"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="full"
        >
          <Container>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <Box
                width={['full', 'full', 'full', '3/10', '3/12']}
                px={[2, 2, 0]}
              >
                <Link href="/" passHref>
                  <a aria-label="to-home-page">
                    <Box display="flex" alignItems="center" pb={2}>
                      <Box
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                      >
                        {'darri'.split('').map((letter, index) => (
                          <LogoText
                            key={`${letter}-${index}`}
                            animate={
                              !inView
                                ? letter === 'f'
                                  ? 'flipped'
                                  : !inView && 'gone'
                                : 'regular'
                            }
                            variants={logoLetterVariants}
                            transition={{
                              type: 'spring',
                              bounce: 0,
                              delay: 0.1,
                              duration: 0.6,
                            }}
                          >
                            {letter}
                          </LogoText>
                        ))}
                        <Dot
                          pushUp
                          bg={!inView ? 'dark500' : 'primary'}
                          borderRadius="circle"
                        />
                      </Box>
                    </Box>
                  </a>
                </Link>
                {footer?.data?.contact_button_text && (
                  <motion.div
                    animate={{
                      y: inView ? 0 : -20,
                      opacity: inView ? 1 : 0,
                    }}
                    transition={{
                      type: 'spring',
                      bounce: 0,
                      delay: 0.5,
                      duration: 0.4,
                    }}
                  >
                    <Text
                      mb={2}
                      variant="textLarge"
                      lineHeight="large"
                      color="gray500"
                      fontWeight="medium"
                    >
                      {footer?.data?.contact_button_text}
                    </Text>
                  </motion.div>
                )}
                <motion.div
                  animate={{
                    y: inView ? 0 : -20,
                    opacity: inView ? 1 : 0,
                  }}
                  transition={{
                    type: 'spring',
                    bounce: 0,
                    delay: 0.7,
                    duration: 0.4,
                  }}
                >
                  <Anchor
                    variant="standardBold"
                    href={`mailto:${
                      footer?.data?.contact_email || 'darri19@gmail.com'
                    }`}
                  >
                    {footer?.data?.contact_email || 'darri19@gmail.com'}
                  </Anchor>
                </motion.div>
              </Box>
              <Box
                width={['full', 'full', 'full', '6/10', '6/12']}
                height="full"
              >
                <Box
                  width="full"
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="column"
                  height="full"
                >
                  <Box
                    as="nav"
                    pt={[6, 4]}
                    display="flex"
                    justifyContent={['flex-start', 'flex-start', 'flex-end']}
                    alignItems={[
                      'flex-start',
                      'flex-start',
                      'flex-start',
                      'center',
                    ]}
                    flexDirection="column"
                    width="full"
                  >
                    <Darrnimated animate={inView} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </footer>
    )}
  </InView>
)
