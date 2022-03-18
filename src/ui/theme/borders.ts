import * as colors from './colors'

/**
 * Þá borders sem ég vil nota í hönnunarkerfinu
 */
export const borders = {
  standard: `1px solid ${colors.dark400}`,
  light: `1px solid ${colors.dark100}`,
  transparent: '1px solid transparent',
  darkGray: `1px solid ${colors.backgroundDark}`,
  dark: `1px solid ${colors.dark300}`,
  focus: `2px solid ${colors.primary400}`,
  focusThick: `4px solid ${colors.primary400}`,
  none: 'none',
}

export const radii = {
  small: 4,
  large: 15,
  xlarge: 35,
  circle: '100%',
  oval: '60px',
}

const shadows = {
  standard: '0px 0px 32px rgba(0, 0, 0, 0.05)',
  hover: '0px 0px 32px rgba(0, 0, 0, 0.1)',
  menu: '0px 16px 32px rgba(0, 0, 0, 0.05);',
}

export const borderStyles = {
  radii,
  shadows,
  borders: borders,
}
