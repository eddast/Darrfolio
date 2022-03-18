import styled from 'styled-components'
import { typography, TypographyProps, variant } from 'styled-system'

import {
  position,
  background,
  color,
  layout,
  space,
  PositionProps,
  BackgroundColorProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system'

type StyledTextProps = PositionProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  BackgroundColorProps & {
    variant?: string
  }

export const StyledText = styled.div<StyledTextProps>`
  ${position}
  ${space}
  ${layout}
  ${color}
  ${background}
  ${typography}

  ${variant({
    scale: 'fontVariants',
    variants: {
      h1: {},
    },
  })}
`
