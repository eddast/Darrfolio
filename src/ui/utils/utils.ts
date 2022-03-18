import {
  gridColumnSizes,
  ThemeBreakpointNames,
  ThemeDisplayProp,
} from 'ui/theme'

export function convertThemeColumnProps(
  keyInput: string | undefined | string[],
) {
  if (!keyInput) return keyInput
  const value = Array.isArray(keyInput) ? keyInput : [keyInput]

  return value.map((x) =>
    Object.keys(gridColumnSizes)
      .map((key) => key)
      .includes(x)
      ? `${(Number(x.split('/')[0]) / Number(x.split('/')[1])) * 100}%`
      : x,
  )
}

export interface ResponsiveRangeProps {
  above?: Exclude<ThemeBreakpointNames, 'xs'>
  below?: Exclude<ThemeBreakpointNames, 'xs'>
}

const breakpoints: [
  ThemeBreakpointNames,
  ThemeBreakpointNames,
  ThemeBreakpointNames,
  ThemeBreakpointNames,
  ThemeBreakpointNames,
  ThemeBreakpointNames,
] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

export const resolveResponsiveRangeProps = (
  props: ResponsiveRangeProps,
): [
  ThemeDisplayProp,
  ThemeDisplayProp,
  ThemeDisplayProp,
  ThemeDisplayProp,
  ThemeDisplayProp,
  ThemeDisplayProp,
] => {
  const { above, below } = props

  if (!above && !below) {
    return ['inherit', 'inherit', 'inherit', 'inherit', 'inherit', 'inherit']
  }

  const startIndex = above ? breakpoints.indexOf(above) : 0
  const endIndex = below
    ? breakpoints.indexOf(below) - 1
    : breakpoints.length - 1
  const range = breakpoints.slice(startIndex, endIndex + 1)

  const propXs = range.indexOf('xs') >= 0 ? 'none' : 'inherit'
  const propSm = range.indexOf('sm') >= 0 ? 'none' : 'inherit'
  const propMd = range.indexOf('md') >= 0 ? 'none' : 'inherit'
  const propLg = range.indexOf('lg') >= 0 ? 'none' : 'inherit'
  const propXl = range.indexOf('xl') >= 0 ? 'none' : 'inherit'
  const propXxl = range.indexOf('xxl') >= 0 ? 'none' : 'inherit'

  return [propXs, propSm, propMd, propLg, propXl, propXxl]
}

export const hexToRgba = (hex: string, alpha: number) => {
  // Requires 6 number hexadecimal
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  if (!rgb) {
    return `rgba(102, 51, 153, 1)`
  }

  const r = parseInt(rgb[1], 16)
  const g = parseInt(rgb[2], 16)
  const b = parseInt(rgb[3], 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const formValidationPatterns = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  numbersOnly: /^\d+$/,
  nationalId: /([0-9]){6}-?([0-9]){4}/,
}

export const getPreviewRef = (previewData: unknown) =>
  typeof previewData === 'object'
    ? (previewData as { ref?: string }).ref || ''
    : ''
