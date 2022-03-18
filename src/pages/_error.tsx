/**
 * Catchar 500 og 404 villur og leiðir á error skjá
 * Hægt að gera miklu betur bara nennis lel
 */
import React, { FC } from 'react'
import NotFound from 'screens/notFound/notFound'

const ErrorPage: FC<{}> = () => <NotFound />

export default ErrorPage
