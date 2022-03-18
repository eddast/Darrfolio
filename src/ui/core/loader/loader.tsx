import { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from '..'

const loadDots = keyframes`
0%,
80%,
100% {
    box-shadow: 0 2.5em 0 -1.3em #D80921;
  }
  40% {
    box-shadow: 0 2.5em 0 0 #D80921;
  }
`

export const LoadDot = styled(Box)<{ animationDelay?: number }>`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  animation: ${loadDots} 1.8s infinite ease-in-out;
  animation-fill-mode: both;
  transform: translateZ(0);
  animation-delay: ${({ animationDelay }) => animationDelay || 0}s;
  margin: -3.5em 5px 5px;
`

const Loader: FC = () => (
  <Box display="flex">
    <LoadDot animationDelay={0} />
    <LoadDot animationDelay={0.3} />
    <LoadDot animationDelay={0.6} />
  </Box>
)

export default Loader
