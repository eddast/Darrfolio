import { ThemeOverflowProp } from 'ui/theme'
import React, { FC } from 'react'
import { StyledGridRow } from './gridRow.styles'

interface Props {
  overflow?: ThemeOverflowProp
}

export const GridRow: FC<Props> = ({ overflow, ...props }) => (
  <StyledGridRow
    display="flex"
    flexBasis="auto"
    flexGrow={0}
    flexShrink={1}
    flexWrap="wrap"
    overflowX={overflow || 'hidden'}
    {...props}
  />
)
