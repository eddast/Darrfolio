import React, { FC } from 'react'
import { StyledListItem } from './orderedList.styles'

export const OrderedListItem: FC<{ noMargin?: boolean }> = ({
  children,
  noMargin,
  ...props
}) => {
  return (
    <StyledListItem noMargin={noMargin} {...props}>
      {children}
    </StyledListItem>
  )
}
