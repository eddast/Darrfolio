import { ThemeBreakpointNames } from 'ui/theme'
import { resolveResponsiveRangeProps } from 'ui/utils'
import React, { FC } from 'react'
import { Box, BoxProps } from '../box/box'

interface Props extends Omit<BoxProps, 'display'> {
  above?: Exclude<ThemeBreakpointNames, 'xs'>
  below?: Exclude<ThemeBreakpointNames, 'xs'>
}

export const Hidden: FC<Props> = ({ above, below, ...props }) => {
  return (
    <Box display={resolveResponsiveRangeProps({ above, below })} {...props} />
  )
}
