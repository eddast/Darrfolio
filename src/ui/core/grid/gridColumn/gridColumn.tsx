import {
  ThemeFlexboxOrderProp,
  ThemeLayoutProp,
  ThemeResponsiveLayout,
  ThemeResponsiveProp,
} from 'ui/theme'
import React, { FC } from 'react'
import { StyledGridColumn } from './gridColumn.styles'
import { convertThemeColumnProps } from 'ui/utils'

interface Props {
  width?: ThemeResponsiveLayout
  offset?: ThemeResponsiveProp<ThemeLayoutProp>
  pushBottom?: boolean
  order?: ThemeResponsiveProp<ThemeFlexboxOrderProp>
}

export const GridColumn: FC<Props> = ({ width, offset, ...props }) => (
  <StyledGridColumn
    width={width || 'full'}
    ml={convertThemeColumnProps(offset)}
    {...props}
  />
)
