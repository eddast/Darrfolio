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
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
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
                    {'darri'.split('').map((letter, index) => (
                      <LogoText
                        key={`${letter}-${index}`}
                        animate={
                          animateLetters
                            ? index < 1
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
          <Box zIndex="1" width="9/12">
            <Box display="flex" as="nav" width="full" justifyContent="flex-end">
              {menu?.data?.social_medias?.map(({ icon, link }, index) => (
                <Hidden
                  key={icon + index}
                  below={icon !== 'spotify' ? 'sm' : undefined}
                >
                  <Box pr={[0, 0, 1]} pl={1}>
                    <Link href={linkResolver(link)}>
                      <Anchor
                        href={linkResolver(link)}
                        variant="darkBold"
                        size="small"
                        iconColor={icon === 'spotify' ? undefined : 'primary'}
                        iconFill={icon === 'spotify' ? 'spotify' : undefined}
                        iconSize={[18, 20, 24]}
                        iconLeft={icon}
                      >
                        <motion.span
                          variants={logoLetterVariants}
                          animate={animateLetters ? 'gone' : 'regular'}
                          whileHover={{
                            width: 'auto',
                            opacity: 1,
                          }}
                        >
                          {icon[0].toUpperCase() + icon.slice(1, icon.length)}
                        </motion.span>
                      </Anchor>
                    </Link>
                  </Box>
                </Hidden>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
