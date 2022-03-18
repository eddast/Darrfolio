import React, { FC } from 'react'
import { StyledListItem } from './list.styles'

export const ListItem: FC<{ noMargin?: boolean }> = ({
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
