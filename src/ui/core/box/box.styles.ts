import styled from 'styled-components'
import {
  position,
  background,
  color,
  layout,
  space,
  flexbox,
  border,
  shadow,
  typography,
  PositionProps,
  BackgroundColorProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  BorderProps,
  ShadowProps,
  TypographyProps,
} from 'styled-system'

export type StyledBoxProps = BackgroundColorProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  PositionProps &
  FlexboxProps &
  BorderProps &
  ShadowProps &
  TypographyProps

export const StyledBox = styled.div<StyledBoxProps>`
  ${position}
  ${space}
  ${layout}
  ${color}
  ${background}
  ${flexbox}
  ${border}
  ${shadow}
  ${typography}
`
