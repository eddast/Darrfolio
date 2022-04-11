type Props = {
  bg?: ThemeResponsiveProp<ThemeColorProp>
}
import { FC } from 'react'
import styled from 'styled-components'
import { ThemeColorProp, ThemeResponsiveProp } from 'ui/theme'
import { Box } from '..'

export const Rect = styled(Box)`
  width: 1rem;
  height: 1rem;
`

export const Rectangle: FC<Props> = ({ bg }) => (
  <Rect display="flex" bg={bg} p={20} m={[0, 0, 2]} />
)
