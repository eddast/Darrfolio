import Link from 'next/link'
import React, { FC, useEffect, useRef, useState } from 'react'
import { Header as HeaderType } from 'types'
import { linkResolver } from 'helpers'
import { Box, Anchor, Text, Hidden } from 'ui/core'
import { Dot, LogoText } from './header.styles'
import { theme } from 'ui/theme'
import { useWindowScroll } from 'react-use'
import { motion } from 'framer-motion'

type Props = {
  menu: HeaderType
}

/**
 * Nota framer motion fyrir animation yfirleitt, það er bara preference og ekkert atriði
 * en mæli samt sjúkjúkjúkjúklega með því ef þú hefur áhuga á animations
 */
export const logoLetterVariants = {
  flipped: {
    scaleX: [1, -1, 0.8, 0.99, 1],
    color: theme.colors.primary,
  },
  gone: {
    width: 0,
    opacity: 0,
  },
  regular: {
    width: 'auto',
    color: theme.colors.dark500,
    scaleX: [-0.99, 1, 0.8, 0.9, 0.99],
  },
}

/**
 * Vildi ekki vera of brutal að láta þig gera header svo
 * setti inn smá sætan (og kannski alltof extra en þarrílagi) header hér
 */
export const Header: FC<Props> = ({ menu }) => {
  const [animateLetters, setAnimateLetters] = useState<boolean>(false)
  const ref = useRef(null)
  const { y } = useWindowScroll()

  useEffect(() => {
    if (y > 40 && !animateLetters) {
      setAnimateLetters(true)
    } else if (y <= 40 && animateLetters) {
      setAnimateLetters(false)
    }
  }, [y])

  return (
    <>
      <Box
        as="header"
        position="sticky"
        width="viewportWidth"
        bg="white"
        top={0}
        zIndex="header"
        ref={ref}
      >
        <Box
          position="relative"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={[2, 2, 2, 2, 3]}
          boxShadow="menu"
          px={[2, 2, 2, 2, 4, 4]}
        >
          <Box display="flex" alignItems="center" width="3/12">
            <Link href="/">
              <a href="/" aria-label="Fara á forsíðu">
                <Box
                  right={0}
                  bottom={0}
                  display="flex"
                  justifyContent={['flex-start', 'flex-start', 'center']}
                  alignItems="center"
                >
                  <Box display="flex" alignItems="flex-end">
                    {'darrfolio'.split('').map((letter, index) => (
                      <LogoText
                        key={`${letter}-${index}`}
                        animate={
                          animateLetters
                            ? letter !== 'f' && letter !== 'o' && letter !== 'l'
                              ? 'flipped'
                              : animateLetters && 'gone'
                            : 'regular'
                        }
                        variants={logoLetterVariants}
                        transition={{
                          type: 'spring',
                          bounce: 0,
                          duration: 0.6,
                        }}
                      >
                        {letter}
                      </LogoText>
                    ))}
                    <Dot
                      pushUp
                      bg={!animateLetters ? 'primary' : 'dark500'}
                      borderRadius="circle"
                    />
                  </Box>
                </Box>
              </a>
            </Link>
          </Box>
          <Box zIndex="1" width="9/12" display={['none', 'inherit']}>
            <Box display="flex" as="nav" width="full" justifyContent="flex-end">
              {menu?.data?.links?.map(
                ({ link, label }, index) =>
                  linkResolver(link) && (
                    <Box px={[1, 1, 4]} pl={1}>
                      <Link href={linkResolver(link)}>
                        <Anchor
                          href={linkResolver(link)}
                          variant="darkBold"
                          size="small"
                        >
                          {label}
                        </Anchor>
                      </Link>
                    </Box>
                  ),
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
