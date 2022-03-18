import { RichTextBlock } from 'prismic-reactjs'
import React, { FC } from 'react'
import styled, { css, keyframes } from 'styled-components'
import Darri from './darri.svg'

interface Props {
  content: RichTextBlock[]
}

const drawAnimationBlack = keyframes`
0% {
  stroke-dashoffset: 1000;
  fill: white;
  color: white;
}
  80% {
    stroke-dashoffset: 0;
    fill: lightgray; 
    color: lightgray; 
  }
  100% {
    stroke-dashoffset:0;
    fill: lightgray; 
    color: lightgray; 
   }
`

const fadeInColorGrey = keyframes`
  0% {
    stroke-dashoffset: 1000;
    fill: white;
    color: white;
  }
  100% {
    stroke-dashoffset: 0;
    fill: black;
    color: black;
  } 
`

export const Darrwrapper = styled.div<{ animate?: boolean }>`
  svg {
    g {
      path {
        &:first-child {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          stroke: black;
          stroke-width: 1px;
          fill: white;
          color: white;
        }
        &:last-child {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          stroke: gray;
          stroke-width: 1px;
          fill: white;
          color: white;
        }
        ${({ animate }) =>
          animate &&
          css`
            &:first-child {
              animation: ${fadeInColorGrey} 4s forwards 0s;
            }
            &:last-child {
              animation: ${drawAnimationBlack} 3s forwards 0s;
            }
          `}
      }
    }
  }
`

/**
 * Prismic specific component
 * Parsar rich content í rich content editor með að nota html serializer (sjá comment þar)
 * Pretty much virkar eins og interweave
 */
export const Darrnimated: FC<{ animate?: boolean }> = ({ animate }) => {
  return (
    <Darrwrapper animate={animate}>
      <Darri />
    </Darrwrapper>
  )
}
