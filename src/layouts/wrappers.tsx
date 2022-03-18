import { Box } from 'ui/core'
import { FC } from 'react'

/* Þessi wrappar bara slice-um í prismic - þ.e. byggingaeiningunum
 *  Þetta er bara prismic specific
 */

export const withWrapperBox = <T,>(Component: FC<T>, extraProps?: any) => {
  const ContainerHOC = (props: T) => {
    return (
      <Box as="section" my={[4, 4, 10, 15]}>
        <Component {...props} {...extraProps} />
      </Box>
    )
  }
  return ContainerHOC
}
