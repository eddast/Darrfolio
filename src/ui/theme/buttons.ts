import * as colors from './colors'
import * as fonts from './fonts'
import { borders, radii } from './borders'

/**
 * Hér skilgreini ég alla þá button variants sem ég vil hafa í verkefninu
 * Þetta er partur af styled system, svona er ég að byggja upp mitt
 * hönnunarkerfi fyrir síðuna. Ég nota bara þessa buttons í verkefninu svo allt er consistant
 */
const buttonFocus = {
  ':focus': {
    outline: `${colors.primary300} solid 2px`,
  },
  ':focus:not(:focus-visible)': {
    outline: 'none',
  },
  ':focus-visible': {
    outline: `${colors.primary400} solid 2px`,
  },
}

const buttons = {
  primary: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontWeight: 700,
    borderRadius: '35px',
    svg: {
      color: colors.white,
    },
    ':hover': {
      backgroundColor: colors.primary400,
    },
    ':focus': {
      outline: `${colors.primary400} solid 2px`,
    },
    ':focus:not(:focus-visible)': {
      outline: 'none',
    },
    ':focus-visible': {
      outline: `${colors.primary400} solid 2px`,
    },
  },
}

export const buttonSizes = {
  xxsmall: {
    fontSize: 14,
    lineHeight: 1,
    padding: '10px 14px',
  },
  xsmall: {
    fontSize: 16,
    lineHeight: 1,
    padding: '10px 14px',
  },
  small: {
    fontSize: 16,
    lineHeight: 1,
    padding: '18px 32px',
  },
  large: {
    fontSize: 18,
    lineHeight: 1,
    padding: '22px 40px',
  },
}

export const buttonStyles = {
  buttonSizes,
  buttons: buttons,
}
