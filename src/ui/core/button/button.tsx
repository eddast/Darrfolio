import { ButtonSize, ButtonVariant, ThemeFlexboxProp } from 'ui/theme'
import React, { forwardRef } from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import { Box, BoxResponsiveMarginProps } from '../box/box'
import { ButtonWidth, StyledButton } from './button.styles'

type ButtonAsProp =
  | 'a'
  | 'button'
  | 'div'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'caption'
  | 'label'

type AnchorProps = {
  as?: ButtonAsProp
  href?: string
  target?: string
  rel?: string
}

export type ButtonBaseProps = Omit<
  BoxResponsiveMarginProps &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
  'ref'
> & {
  disabled?: boolean
  width?: ButtonWidth
  justifyContent?: ThemeFlexboxProp
  isLoading?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
} & Omit<AnchorProps, 'renderIconLeft' | 'renderIconRight' | 'size' | 'variant'>

export const Button = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    { variant = 'primary', size = 'large', children, ...props },
    forwardedRef,
  ) => {
    const flattenedChildren = flattenChildren(children)

    return (
      <StyledButton variant={variant} size={size} ref={forwardedRef} {...props}>
        {flattenedChildren}
      </StyledButton>
    )
  },
)
