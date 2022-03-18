import {
  ThemeFlexboxBasisProp,
  ThemeFlexboxDirectionProp,
  ThemeFlexboxGrowProp,
  ThemeFlexboxOrderProp,
  ThemeFlexboxProp,
  ThemeFlexboxWrapProp,
  ThemeResponsiveLayout,
  ThemeResponsiveSpace,
  ThemeDisplayProp,
  ThemeOpacityProp,
  ThemeOverflowProp,
  ThemePositionProp,
  ThemeRelativePositionProp,
  ThemeResponsiveProp,
  ThemeTextAlignProp,
  ThemeBorderProp,
  ThemeZIndexProp,
  ThemeColorProp,
  ThemeBorderRadiusProp,
  ThemeBoxShadowProp,
} from '../../theme'
import { AllHTMLAttributes, forwardRef } from 'react'
import { StyledBox } from './box.styles'

export type BoxResponsiveMarginProps = {
  m?: ThemeResponsiveSpace
  mx?: ThemeResponsiveSpace
  my?: ThemeResponsiveSpace
  mt?: ThemeResponsiveSpace
  mr?: ThemeResponsiveSpace
  mb?: ThemeResponsiveSpace
  ml?: ThemeResponsiveSpace
}

export type BoxResponsivePaddingProps = {
  p?: ThemeResponsiveSpace
  px?: ThemeResponsiveSpace
  py?: ThemeResponsiveSpace
  pt?: ThemeResponsiveSpace
  pr?: ThemeResponsiveSpace
  pb?: ThemeResponsiveSpace
  pl?: ThemeResponsiveSpace
}

export type BoxResponsiveSpaceProps = BoxResponsiveMarginProps &
  BoxResponsivePaddingProps

export type BoxFlexProps = {
  alignItems?: ThemeResponsiveProp<ThemeFlexboxProp>
  alignContent?: ThemeResponsiveProp<ThemeFlexboxProp>
  justifyItems?: ThemeResponsiveProp<ThemeFlexboxProp>
  justifyContent?: ThemeResponsiveProp<ThemeFlexboxProp>
  flexWrap?: ThemeResponsiveProp<ThemeFlexboxWrapProp>
  flexDirection?: ThemeResponsiveProp<ThemeFlexboxDirectionProp>
  flexGrow?: ThemeResponsiveProp<ThemeFlexboxGrowProp>
  flexShrink?: ThemeResponsiveProp<ThemeFlexboxGrowProp>
  flexBasis?: ThemeResponsiveProp<ThemeFlexboxBasisProp>
  justifySelf?: ThemeResponsiveProp<ThemeFlexboxProp>
  alignSelf?: ThemeResponsiveProp<ThemeFlexboxProp>
}

export type BoxBorderProp = {
  border?: ThemeResponsiveProp<ThemeBorderProp>
  borderTop?: ThemeResponsiveProp<ThemeBorderProp>
  borderRight?: ThemeResponsiveProp<ThemeBorderProp>
  borderBottom?: ThemeResponsiveProp<ThemeBorderProp>
  borderLeft?: ThemeResponsiveProp<ThemeBorderProp>
}

export type BoxAsProp =
  | 'div'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'header'
  | 'form'
  | 'th'
  | 'td'
  | 'tr'
  | 'section'
  | 'nav'
  | 'article'
  | 'aside'
  | 'a'

export type BoxProps = BoxResponsiveSpaceProps &
  BoxFlexProps &
  BoxBorderProp &
  Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height' | 'className'> & {
    display?: ThemeResponsiveProp<ThemeDisplayProp>
    position?: ThemeResponsiveProp<ThemePositionProp>
    top?: ThemeResponsiveProp<ThemeRelativePositionProp>
    right?: ThemeResponsiveProp<ThemeRelativePositionProp>
    bottom?: ThemeResponsiveProp<ThemeRelativePositionProp>
    left?: ThemeResponsiveProp<ThemeRelativePositionProp>
    zIndex?: ThemeZIndexProp
    order?: ThemeResponsiveProp<ThemeFlexboxOrderProp>
    width?: ThemeResponsiveLayout
    height?: ThemeResponsiveLayout
    minWidth?: ThemeResponsiveLayout
    maxWidth?: ThemeResponsiveLayout
    minHeight?: ThemeResponsiveLayout
    maxHeight?: ThemeResponsiveLayout
    overflow?: ThemeResponsiveProp<ThemeOverflowProp>
    overflowY?: ThemeResponsiveProp<ThemeOverflowProp>
    overflowX?: ThemeResponsiveProp<ThemeOverflowProp>
    color?: ThemeColorProp
    bg?: ThemeResponsiveProp<ThemeColorProp>
    textAlign?: ThemeResponsiveProp<ThemeTextAlignProp>
    opacity?: ThemeResponsiveProp<ThemeOpacityProp>
    borderRadius?: ThemeResponsiveProp<ThemeBorderRadiusProp>
    borderTopLeftRadius?: ThemeResponsiveProp<ThemeBorderRadiusProp>
    borderTopRightRadius?: ThemeResponsiveProp<ThemeBorderRadiusProp>
    borderBottomLeftRadius?: ThemeResponsiveProp<ThemeBorderRadiusProp>
    borderBottomRightRadius?: ThemeResponsiveProp<ThemeBorderRadiusProp>
    borderWidth?: ThemeResponsiveProp<number>
    boxShadow?: ThemeBoxShadowProp
    as?: BoxAsProp
    className?: string
  }

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ zIndex, ...props }, ref) => {
    return <StyledBox ref={ref} zIndex={zIndex as any} {...props} />
  },
)
