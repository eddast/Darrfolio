import { Box } from 'ui/core'
import React, { FC } from 'react'
import { LogoWrapper } from './fallbackScreen.styles'

export const FallbackScreen: FC = () => (
  <Box
    height="viewportHeight"
    width="viewportWidth"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <LogoWrapper />
  </Box>
)
