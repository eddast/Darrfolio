import React, { PureComponent } from 'react'
import { Box, Text } from 'ui/core'

interface PropTypes {
  children: React.ReactNode
}

interface StateTypes {
  error?: Error
}

export default class ErrorBoundary extends PureComponent<
  PropTypes,
  StateTypes
> {
  constructor(props: PropTypes) {
    super(props)
    this.state = { error: undefined }
  }

  render() {
    const { children } = this.props
    const { error } = this.state

    if (error) {
      return (
        <Box display="flex" justifyContent="center" minHeight="viewportHeight">
          <Box mb={3} mt={10} py={10}>
            <Text variant="h1" as="h1">
              Something went wrong...
            </Text>
          </Box>
        </Box>
      )
    }

    return children
  }
}
