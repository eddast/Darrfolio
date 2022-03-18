import React, { FC, forwardRef } from 'react'
import styled from 'styled-components'
import { AnchorSize, AnchorVariant } from 'ui/theme'
import { BoxResponsivePaddingProps } from '../box/box'
import { StyledAnchor } from './anchor.styles'

export type AnchorProps = Omit<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  'ref'
> & {
  fontWeight?: string
  as?: 'a' | 'button'
  variant?: AnchorVariant
  size?: AnchorSize
}

export const AnchorBlock = styled.a`
  display: block;
  height: 100%;
`

export const Anchor: FC<
  AnchorProps & BoxResponsivePaddingProps & { ref?: any }
> = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      as = 'a',
      size = 'standard',
      variant = 'standard',
      fontWeight,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <StyledAnchor
        ref={forwardedRef}
        as={as}
        size={size}
        fontWeight={fontWeight}
        variant={variant}
        {...props}
      >
        {children || ''}
      </StyledAnchor>
    )
  },
)
