import styled, { keyframes } from 'styled-components'

const logoAnimation = keyframes`
    50% { opacity: 0 }
`

export const LogoWrapper = styled.div`
  animation: ${logoAnimation} 2500ms ease-in-out infinite;
`
