import { linkResolver } from 'helpers'
import Link from 'next/link'
import { FC, useRef } from 'react'
import { Box, Container, Text, Anchor, Button } from 'ui/core'
import { Footer as FooterType } from 'types'
import { InView } from 'react-intersection-observer'
import { Dot, LogoText } from 'components/header/header.styles'
import { logoLetterVariants } from 'components/header/header'
import { motion } from 'framer-motion'

/**
 * Vildi ekki vera of brutal að láta þig gera footer svo
 * setti inn smá sætan footer hér
 */
export const Footer: FC<{ footer: FooterType | null }> = ({ footer }) => {
  const ref = useRef(null)
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref }) => (
        <footer ref={ref}>
          <Box
            py={[18, 16, 10]}
            bg="gray200"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="full"
          >
            <Container>
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
              >
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
                  {footer?.data?.footer_text && (
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
                        {footer?.data?.footer_text}
                      </Text>
                    </motion.div>
                  )}
                  {footer?.data?.footer_email && (
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
                        href={`mailto:${footer?.data?.footer_email}`}
                      >
                        {footer?.data?.footer_email}
                      </Anchor>
                    </motion.div>
                  )}
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
                      pb={[4, 4, 0]}
                      display="flex"
                      justifyContent={['flex-start', 'flex-start', 'flex-end']}
                      alignItems={[
                        'flex-start',
                        'flex-start',
                        'flex-start',
                        'center',
                      ]}
                      flexDirection={['column', 'column', 'column', 'row']}
                      width="full"
                    >
                      {footer?.data?.links?.map(
                        ({ link, link_label }, index) => (
                          <motion.span
                            key={link.uid || index}
                            animate={{
                              y: inView ? 0 : -20,
                              opacity: inView ? 1 : 0,
                            }}
                            transition={{
                              type: 'spring',
                              bounce: 0,
                              delay: index / 10 + 0.1,
                              duration: 0.3,
                            }}
                          >
                            <Box
                              key={link.uid || index}
                              px={[2, 2, 2, 2, 4]}
                              py={[1, 1, 0]}
                            >
                              <Link href={linkResolver(link)}>
                                <Anchor
                                  variant="dark"
                                  href={linkResolver(link)}
                                >
                                  {link_label}
                                </Anchor>
                              </Link>
                            </Box>
                          </motion.span>
                        ),
                      )}
                      {footer?.data?.button_link &&
                        linkResolver(footer?.data?.button_link) && (
                          <motion.span
                            animate={{
                              y: inView ? 0 : -20,
                              opacity: inView ? 1 : 0,
                            }}
                            transition={{
                              type: 'spring',
                              bounce: 0,
                              delay: 0.7,
                              duration: 0.3,
                            }}
                          >
                            <Box display={['none', 'none', 'none', 'inherit']}>
                              <Box px={[0, 0, 2]}>
                                <Link
                                  href={linkResolver(footer?.data.button_link)}
                                  passHref
                                >
                                  <Button as="a" size="small">
                                    {footer?.data.button_text || 'Spotify'}
                                  </Button>
                                </Link>
                              </Box>
                            </Box>
                          </motion.span>
                        )}
                    </Box>
                    <Box width="full" height="full">
                      <Box
                        as="nav"
                        width="full"
                        height="full"
                        display="flex"
                        alignItems={[
                          'flex-start',
                          'flex-start',
                          'flex-start',
                          'flex-end',
                        ]}
                        justifyContent={[
                          'flex-start',
                          'flex-start',
                          'center',
                          'flex-end',
                        ]}
                        flexDirection={['column', 'column', 'row']}
                      >
                        {footer?.data?.social_medias?.map(
                          ({ icon, link }, index) => (
                            <motion.span
                              key={link.uid || index}
                              animate={{
                                y: inView ? 0 : -20,
                                opacity: inView ? 1 : 0,
                              }}
                              transition={{
                                type: 'spring',
                                bounce: 0,
                                delay: index / 10 + 0.8,
                                duration: 0.3,
                              }}
                            >
                              <Box key={icon + index} px={[2]} pt={5}>
                                <Link href={linkResolver(link)}>
                                  <Anchor
                                    href={linkResolver(link)}
                                    variant="darkBold"
                                    size="small"
                                  >
                                    {icon[0].toUpperCase() +
                                      icon.slice(1, icon.length)}
                                  </Anchor>
                                </Link>
                              </Box>
                            </motion.span>
                          ),
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {footer?.data?.button_link &&
                linkResolver(footer?.data.button_link) && (
                  <Box
                    display={['inherit', 'inherit', 'inherit', 'none']}
                    width="full"
                  >
                    <Box as="nav" pt={4}>
                      <Link
                        href={linkResolver(footer?.data.button_link)}
                        passHref
                      >
                        <Button>{footer?.data.button_text || 'Spotify'}</Button>
                      </Link>
                    </Box>
                  </Box>
                )}
            </Container>
          </Box>
        </footer>
      )}
    </InView>
  )
}
