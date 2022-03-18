import React, { FC } from 'react'
import { Box } from 'ui/core'

export const Container: FC = (props) => (
  <Box
    px={[2, 3, 4, 5, 0]}
    mx={[0, 0, 0, 'auto']}
    width="full"
    maxWidth="container"
    {...props}
  />
)
