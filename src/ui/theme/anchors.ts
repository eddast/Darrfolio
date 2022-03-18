import * as colors from './colors'
import * as fonts from './fonts'

/**
 * Hér skilgreini ég alla þá anchor variants sem ég vil hafa í verkefninu
 * Þetta er partur af styled system, svona er ég að byggja upp mitt
 * hönnunarkerfi fyrir síðuna. Ég nota bara þessa anchors í verkefninu svo allt er consistant
 */
const anchorFocusStyles = {
  ':focus': {
    outline: `${colors.primary400} solid 2px`,
  },
  ':focus:not(:focus-visible)': {
    outline: 'none',
  },
  ':focus-visible': {
    outline: `${colors.primary400} solid 2px`,
  },
}

const anchors = {
  standard: {
    color: colors.primary300,
    fontWeight: fonts.fontWeights.medium,
    fontFamily: fonts.fonts.standard,
    ':after': {
      content: '',
      position: 'absolute',
      bottom: '-6px',
      left: 0,
      width: '100%',
      height: '1px',
      backgroundColor: colors.primary300,
      opacity: 0,
      transition: 'opacity 200ms',
    },
    ':hover': {
      color: colors.primaryHover,
      ':after': {
        opacity: 1,
      },
    },
    ...anchorFocusStyles,
  },
  standardBold: {
    color: colors.primary400,
    fontWeight: 700,
    fontFamily: fonts.fonts.standard,
    ':after': {
      content: '',
      position: 'absolute',
      bottom: '-6px',
      left: 0,
      width: '100%',
      height: '1px',
      backgroundColor: colors.primary400,
      opacity: 0,
      transition: 'opacity 200ms',
    },
    ':hover': {
      color: colors.primary500,
      ':after': {
        opacity: 1,
      },
    },
    ...anchorFocusStyles,
  },
  dark: {
    color: colors.primary700,
    fontWeight: 500,
    fontFamily: fonts.fonts.standard,
    ':after': {
      content: '',
      position: 'absolute',
      bottom: '-6px',
      left: 0,
      width: '100%',
      height: '1px',
      backgroundColor: colors.primary500,
      opacity: 0,
      transition: 'opacity 200ms',
    },
    ':hover': {
      color: colors.primary400,
      ':after': {
        opacity: 1,
      },
    },
    ...anchorFocusStyles,
  },
  darkBold: {
    color: colors.primary700,
    fontWeight: 700,
    fontFamily: fonts.fonts.standard,
    ':after': {
      content: '',
      position: 'absolute',
      bottom: '-6px',
      left: 0,
      width: '100%',
      height: '1px',
      backgroundColor: colors.primary500,
      opacity: 0,
      transition: 'opacity 200ms',
    },
    ':hover': {
      color: colors.primary400,
      ':after': {
        opacity: 1,
      },
    },
    ...anchorFocusStyles,
  },
  filter: {
    color: colors.gray400,
    fontWeight: 500,
    ':after': {
      content: '',
      position: 'absolute',
      bottom: '-6px',
      left: 0,
      width: '100%',
      height: '1px',
      backgroundColor: colors.primary400,
      opacity: 0,
      transition: 'opacity 200ms',
    },
    ':hover': {
      color: colors.primary500,
      ':after': {
        opacity: 1,
      },
    },
    ...anchorFocusStyles,
  },
}

export const anchorSizes = {
  small: {
    fontSize: [14],
  },
  standard: {
    fontSize: [14, 16, 18],
  },
  large: {
    fontSize: [18, 18, 20],
  },
}

export const anchorStyles = {
  anchors: anchors,
  anchorSizes: anchorSizes,
}
