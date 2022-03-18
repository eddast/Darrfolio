import {
  ThemeColorProp,
  ThemeFontVariant,
  ThemeFontWeightProp,
  ThemeLineHeightProp,
  ThemeResponsiveProp,
} from 'ui/theme'
import { FC } from 'react'
import { BoxResponsiveSpaceProps } from '../box/box'
import { StyledText } from './text.styles'

const lineHeightDefaultMapper: Record<
  string,
  ThemeResponsiveProp<ThemeLineHeightProp>
> = {
  h1: '1',
  h2: '1',
  text: 'standard',
  textLarge: 'standard',
}

const fontAsDefaultMapper: Record<string, TextAsProp> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

const fontWeightDefaultMapper: Record<
  string,
  ThemeResponsiveProp<ThemeFontWeightProp>
> = {
  h1: 'bold',
  h2: 'bold',
  h3: 'bold',
  h4: 'bold',
  h5: 'bold',
  h6: 'bold',
}

export type TextAsProp =
  | 'div'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'

export type TextBaseProps = BoxResponsiveSpaceProps & {
  variant?: ThemeFontVariant
  color?: ThemeColorProp
  fontWeight?: ThemeResponsiveProp<ThemeFontWeightProp>
  lineHeight?: ThemeResponsiveProp<ThemeLineHeightProp>
  as?: TextAsProp
}

export const Text: FC<TextBaseProps> = ({
  variant = 'text',
  as,
  color,
  lineHeight,
  fontWeight,
  ...props
}) => {
  const renderAs: TextAsProp = as || fontAsDefaultMapper[variant || ''] || 'p'
  const colorValue: ThemeColorProp | undefined = color ? color : 'text'
  const lineHeightValue: ThemeResponsiveProp<ThemeLineHeightProp> | undefined =
    lineHeight ? lineHeight : lineHeightDefaultMapper[variant]
  const fontWeightValue: ThemeResponsiveProp<ThemeFontWeightProp> | undefined =
    fontWeight ? fontWeight : fontWeightDefaultMapper[variant]

  return (
    <StyledText
      fontFamily="standard"
      variant={variant}
      as={renderAs}
      color={colorValue}
      lineHeight={lineHeightValue}
      fontWeight={fontWeightValue}
      {...props}
    />
  )
}
