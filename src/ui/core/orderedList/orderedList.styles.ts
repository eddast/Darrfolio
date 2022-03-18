import styled from 'styled-components'

export const StyledList = styled.ol`
  counter-reset: item;
`

export const StyledListItem = styled.li<{ noMargin?: boolean }>`
  counter-increment: item;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes['18']}px;
  margin-bottom: ${({ theme, noMargin }) => (noMargin ? 0 : theme.space[1])}px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  position: relative;
  display: block;
  line-height: ${({ theme }) => theme.lineHeights.large};

  &:before {
    content: counter(item) '.';
    display: inline-block;
    position: absolute;
    font-weight: 700;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`
