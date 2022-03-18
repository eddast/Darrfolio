import {
  ThemeFlexboxProp,
  ThemeFlexboxWrapProp,
  ThemeOverflowProp,
  ThemeResponsiveProp,
  ThemeResponsiveSpace,
} from 'ui/theme'
import React, { FC, Children } from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import { Box, BoxAsProp } from '../box/box'
import { StyledBox } from '../box/box.styles'

type Props = {
  space?: ThemeResponsiveSpace
  align?: ThemeResponsiveProp<ThemeFlexboxProp>
  justifyContent?: ThemeResponsiveProp<ThemeFlexboxProp>
  overflow?: ThemeOverflowProp
  wrap?: ThemeResponsiveProp<ThemeFlexboxWrapProp>
  as?: BoxAsProp
}

export const Inline: FC<Props> = ({
  space,
  align = 'center',
  wrap = 'wrap',
  children,
  ...props
}) => {
  return (
    <Box display="flex" flexWrap={wrap} alignItems={align} {...props}>
      {Children.map(
        flattenChildren(children),
        (child, index) =>
          child && (
            <StyledBox
              display={align ? 'flex' : 'inherit'}
              alignItems={align}
              lineHeight="1"
              ml={index === 0 ? 0 : space}
              as={props.as}
            >
              {child}
            </StyledBox>
          ),
      )}
    </Box>
  )
}
