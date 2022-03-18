import styled from 'styled-components'

export const StyledListItem = styled.li<{ noMargin?: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes['18']}px;
  margin-bottom: ${({ noMargin, theme }) => (noMargin ? 0 : theme.space[1])}px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  position: relative;
  display: block;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
