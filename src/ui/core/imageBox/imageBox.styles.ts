import { ThemeResponsiveProp } from 'ui/theme'
import styled from 'styled-components'
import {
  space,
  color,
  border,
  ColorProps,
  BorderProps,
  SpaceProps,
} from 'styled-system'
import { Box } from '../box/box'

export type ImageBoxSizeProp =
  | '10%'
  | '15%'
  | '20%'
  | '25%'
  | '30%'
  | '35%'
  | '40%'
  | '45%'
  | '50%'
  | '55%'
  | '60%'
  | '65%'
  | '70%'
  | '75%'
  | '80%'
  | '85%'
  | '90%'
  | '95%'
  | '100%'
  | '105%'
  | '110%'
  | '115%'
  | '120%'
  | '125%'
  | '130%'
  | '140%'
  | '150%'
  | '180%'
  | '200%'

export type ImageBoxProps = {
  height?: ThemeResponsiveProp<ImageBoxSizeProp>
}

type StyledImageBoxProps = ColorProps & BorderProps & ImageBoxProps & SpaceProps

export const StyledImageBox = styled.div<StyledImageBoxProps>`
  position: relative;
  overflow: hidden;
  ${space}
  ${color}
  ${border}
`

type StyledImageBoxOverlayProps = {
  background: string
}

export const StyledImageBoxOverlay = styled(Box)<StyledImageBoxOverlayProps>`
  background: ${({ background }) => background};
`
