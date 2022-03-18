import React, { FC } from 'react'
import { Box, BoxResponsiveSpaceProps } from 'ui/core'

export const List: FC<BoxResponsiveSpaceProps> = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <ul>{children}</ul>
    </Box>
  )
}
