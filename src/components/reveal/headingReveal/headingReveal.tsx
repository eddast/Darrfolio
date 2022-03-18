import { Text, TextBaseProps } from 'ui/core'
import { FC } from 'react'
import styled, { css, keyframes } from 'styled-components'

const rollUpAnimation = keyframes`
	0% { transform: translate3d(0px, 120%, 0px) rotateX(-40deg); opacity: 0; }
	100% { transform: translate3d(0px, 0%, 0px) rotateX(0deg); opacity: 1; }
`

export const TextWrapper = styled.div<{ delay?: number; animate: boolean }>`
  transform: translate3d(0px, 120%, 0px) rotateX(-30deg);
  opacity: 0;
  ${({ animate, delay }) =>
    animate &&
    css`
      animation: ${rollUpAnimation} 0.6s cubic-bezier(0.07, 0.51, 1, 0.99)
        forwards;
      animation-delay: ${delay || 0}s;
    `}
`

export const TextReveal: FC<
  {
    animate: boolean
    firstLine: string
    secondLine?: string
    delay?: number
  } & TextBaseProps
> = ({ animate, firstLine, secondLine, delay = 0, ...props }) => (
  <Text {...props}>
    {firstLine && <TextWrapper animate={animate}>{firstLine}</TextWrapper>}
    {secondLine && (
      <TextWrapper animate={animate} delay={delay + 0.2}>
        {secondLine}
      </TextWrapper>
    )}
  </Text>
)
