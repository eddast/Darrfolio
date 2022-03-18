/**
 * Hér er the motherlode; hér set ég saman allt hönnunarkrfið
 * Hér er ég að segja að verkefnið eigi að nota þetta hönnunarkerfi, þetta theme
 */
import * as layout from './layout'
import { anchorStyles } from './anchors'
import { buttonStyles } from './buttons'
import { borderStyles } from './borders'
import * as fonts from './fonts'
import * as colors from './colors'
import { zIndices } from './zIndices'

export const theme = {
  breakpoints: layout.breakpoints,
  space: layout.space,
  grid: layout.grid,
  sizes: layout.sizes,
  fonts: fonts.fonts,
  fontSizes: fonts.fontSizes,
  fontWeights: fonts.fontWeights,
  lineHeights: fonts.lineHeights,
  fontVariants: fonts.fontVariants,
  ...buttonStyles,
  ...anchorStyles,
  ...borderStyles,
  colors: {
    ...colors,
  },
  zIndices,
}

export const DefaultTheme = theme
export type ThemeInterface = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
