const mediaQuery = (maxWidth: number) =>
  `@media only screen and (max-width: ${maxWidth}px)`
const mediaQueryUp = (minWidth: number) =>
  `@media only screen and (min-width: ${minWidth}px)`

const mapper = {
  mobileSmall: 0,
  mobile: 425,
  tablet: 768,
  desktopSmall: 1024,
  desktopMedium: 1440,
  desktopLarge: 1920,
}

/**
 * Utility function to write media queries
 * ```typescript
 * `
 *  ${media.tablet} {
 *    // styles
 *  }
 * `
 * ```
 */
export const media = {
  custom: mediaQuery,
  mobileSmall: mediaQuery(mapper.mobile - 1),
  mobile: mediaQuery(mapper.tablet - 1),
  tablet: mediaQuery(mapper.desktopSmall - 1),
  desktopSmall: mediaQuery(mapper.desktopMedium - 1),
  desktopMedium: mediaQuery(mapper.desktopLarge - 1),
  customUp: mediaQueryUp,
  mobileSmallUp: mediaQueryUp(mapper.mobileSmall),
  mobileUp: mediaQueryUp(mapper.mobile),
  tabletUp: mediaQueryUp(mapper.tablet),
  desktopSmallUp: mediaQueryUp(mapper.desktopSmall),
  desktopMediumUp: mediaQueryUp(mapper.desktopMedium),
}
