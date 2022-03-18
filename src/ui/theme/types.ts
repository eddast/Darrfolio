import { ThemeInterface } from './theme'

export type ThemeSpaceProp =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 'auto'

export type ThemeLayoutProp = keyof ThemeInterface['sizes']
export type ThemeDisplayProp =
  | 'flex'
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'none'
  | 'inline-flex'
  | 'inherit'
  | 'initial'
export type ThemePositionProp =
  | 'static'
  | 'fixed'
  | 'absolute'
  | 'relative'
  | 'sticky'
export type ThemeRelativePositionProp = number | 'auto' | 'inherit' | '100%'
export type ThemeOpacityProp =
  | 0
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1

export type ThemeResponsiveProp<T> =
  | T
  | [T]
  | [T, T]
  | [T, T, T]
  | [T, T, T, T]
  | [T, T, T, T, T]
  | [T, T, T, T, T, T]

export type ThemeResponsiveSpace = ThemeResponsiveProp<ThemeSpaceProp>
export type ThemeResponsiveLayout = ThemeResponsiveProp<ThemeLayoutProp>
export type ThemeOverflowProp = 'scroll' | 'hidden' | 'auto' | 'visible'
export type ThemeFlexboxProp =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit'
  | 'stretch'
export type ThemeTextAlignProp =
  | 'center'
  | 'left'
  | 'right'
  | 'inherit'
  | 'initial'
export type ThemeFlexboxWrapProp = 'wrap' | 'nowrap'
export type ThemeFlexboxDirectionProp =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'
export type ThemeFlexboxGrowProp = 0 | 1 | 2 | 3 | 4 | 5
export type ThemeFlexboxBasisProp = ThemeFlexboxGrowProp | '100%' | 'auto'
export type ThemeFlexboxOrderProp = 0 | 1 | 2 | 3 | 4 | 5
export type ThemeBreakpointNames = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type ThemeColorProp = keyof ThemeInterface['colors']
export type ThemeBorderProp = keyof ThemeInterface['borders']
export type ThemeBorderRadiusProp = keyof ThemeInterface['radii']
export type ThemeZIndexProp = keyof ThemeInterface['zIndices']
export type ThemeBoxShadowProp = keyof ThemeInterface['shadows']
export type ThemeFontSizeProp = keyof ThemeInterface['fontSizes']
export type ThemeFontWeightProp = keyof ThemeInterface['fontWeights']
export type ThemeLineHeightProp = keyof ThemeInterface['lineHeights']
export type ThemeFontVariant = keyof ThemeInterface['fontVariants']
export type ButtonSize = keyof ThemeInterface['buttonSizes']
export type ButtonVariant = keyof ThemeInterface['buttons']
export type AnchorVariant = keyof ThemeInterface['anchors']
export type AnchorSize = keyof ThemeInterface['anchorSizes']
