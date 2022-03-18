import { ThemeFlexboxProp } from 'ui/theme'
import styled, { css, keyframes } from 'styled-components'
import { space, SpaceProps, variant } from 'styled-system'

const SPEED = '200ms'

export type ButtonWidth = 'normal' | 'full'

export type StyledButtonProps = SpaceProps & {
  variant: string
  size: string
  disabled?: boolean
  width?: ButtonWidth
  justifyContent?: ThemeFlexboxProp
  isLoading?: boolean
}

const disabledStyles = css`
  opacity: 0.5;
  pointer-events: none;
`

const fullWidthStyles = css`
  width: 100%;
`

const loadingSpin = keyframes`
	0% {
		transform: rotate(0);
		animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	50% {
		transform: rotate(180deg);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	100% {
		transform: rotate(360deg);
	}
`

const loadingStyles = css`
  &:after {
    content: '';
    width: 1em;
    height: 1em;
    margin-left: 1em;
    animation: ${loadingSpin} 1000ms infinite;
    background: center center no-repeat;
    background-size: cover;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.15em;
    border-left-color: transparent;
  }
`

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  text-decoration: none;
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  height: auto;
  padding: 0;
  position: relative;
  align-items: center;
  margin: 0;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-family: ${({ theme }) => theme.fonts.standard};
  transition: color ${SPEED} ease, background-color ${SPEED} ease,
    box-shadow ${SPEED} ease, border-color ${SPEED} ease;
  ${space}

  svg {
    transition: color ${SPEED} ease;
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover {
    text-decoration: none;
  }

  ${variant({
    scale: 'buttons',
    variants: {
      primary: {},
    },
  })}

  ${variant({
    prop: 'size',
    scale: 'buttonSizes',
  })}

  ${({ disabled }) => disabled && disabledStyles}
  ${({ width }) => width === 'full' && fullWidthStyles}
  ${({ isLoading }) => isLoading && loadingStyles}
`
