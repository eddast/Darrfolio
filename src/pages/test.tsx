import { Box, Rectangle, Container } from 'ui/core'

const test = () => (
  <Container>
    <Box
      display="flex"
      flexDirection={'column'}
      justifyContent="center"
      flexWrap="wrap"
      height="viewportHeight"
      width="viewportWidth"
    >
      <Rectangle bg="primary200" />
      <Rectangle bg="primary300" />
      <Rectangle bg="primary500" />
    </Box>
  </Container>
)

export default test
