import React, { FC } from 'react'
import { Box, BoxResponsiveSpaceProps } from 'ui/core'
import { StyledList } from './orderedList.styles'

export const OrderedList: FC<BoxResponsiveSpaceProps> = ({
  children,
  ...props
}) => {
  return (
    <Box {...props}>
      <StyledList>{children}</StyledList>
    </Box>
  )
}
