import styled, { css } from 'styled-components'
import { variant, space, SpaceProps } from 'styled-system'

type StyledAnchorProps = SpaceProps & {
  variant?: string
  size?: string
  borderedSize?: string
  fontWeight?: string
}

export const StyledAnchor = styled.a<StyledAnchorProps>`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  transition: color 250ms ease, border-color 250ms ease,
    background-color 250ms ease;
  height: auto;

  &:focus-visible {
    outline: black solid 2px;
  }

  svg {
    transition: color 250ms ease, fill 250ms ease, stroke 250ms ease;
  }

  ${({ fontWeight }) =>
    fontWeight &&
    css`
      p {
        font-weight: ${fontWeight};
      }
    `};

  ${variant({
    scale: 'anchors',
    variants: {
      primary: {},
    },
  })}

  ${variant({
    prop: 'size',
    scale: 'anchorSizes',
    variants: {
      primary: {},
    },
  })};

  ${space};
`
