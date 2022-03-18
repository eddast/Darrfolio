import styled from 'styled-components'
import { StyledBox } from 'ui/core/box/box.styles'

export const StyledGridRow = styled(StyledBox)`
  margin-left: -${({ theme }) => theme.grid.gutter.mobile / 2}px;
  margin-right: -${({ theme }) => theme.grid.gutter.mobile / 2}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-left: -${({ theme }) => theme.grid.gutter.desktop / 2}px;
    margin-right: -${({ theme }) => theme.grid.gutter.desktop / 2}px;
  }
`
