import styled from 'styled-components'
import { StyledBox, StyledBoxProps } from 'ui/core/box/box.styles'

type Props = StyledBoxProps & {
  pushBottom?: boolean
}

export const StyledGridColumn = styled(StyledBox)<Props>`
  padding-left: ${({ theme }) => theme.grid.gutter.mobile / 2}px;
  padding-right: ${({ theme }) => theme.grid.gutter.mobile / 2}px;
  margin-bottom: ${({ theme, pushBottom }) =>
    pushBottom ? theme.grid.gutter.mobile : 0}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding-left: ${({ theme }) => theme.grid.gutter.desktop / 2}px;
    padding-right: ${({ theme }) => theme.grid.gutter.desktop / 2}px;
    margin-bottom: ${({ theme, pushBottom }) =>
      pushBottom ? theme.grid.gutter.desktop : 0}px;
  }
`
