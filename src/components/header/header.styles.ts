import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { Box } from 'ui/core'
import { media } from 'ui/utils/lib/mediaQuery'

export const Dot = styled(Box)<{ size?: number; pushUp?: boolean }>`
  height: ${({ size }) => size || 8}px;
  width: ${({ size }) => size || 8}px;
  ${({ pushUp, size }) =>
    pushUp &&
    css`
      margin-bottom: 14px;
      ${media.mobile} {
        margin-bottom: 12px;
        height: ${(size && size - 2) || 6}px;
        width: ${(size && size - 2) || 6}px;
      }
    `}
`
export const LogoText = styled(motion.h4)`
  font-size: ${({ theme }) => theme.fontSizes['24']}px;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSizes['18']}px;
  }
`
