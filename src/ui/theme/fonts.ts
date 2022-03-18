/**
 * Hér skilgreini ég hvaða stærðir, fonts og text variants ég má nota í verkefninu
 */
export const fonts = {
  headings: 'Kumbh Sans, sans-serif',
  standard: 'Kumbh Sans, sans-serif',
  supporting: 'Kumbh Sans, sans-serif',
}

export const fontSizes = {
  '12': 12,
  '14': 14,
  '15': 15,
  '16': 16,
  '18': 18,
  '20': 20,
  '24': 24,
  '26': 26,
  '32': 32,
  '34': 34,
  '48': 48,
  '60': 60,
  '100': 100,
  '150': 150,
}

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
}

export const lineHeights = {
  '1': 1,
  standard: 1.5,
  large: 2,
}

export const fontVariants = {
  /**
   * Hér er ég með responsive font size, svo arrayið merkir
   * [mobilestærð, stærrimobilestærð, tabletstærð, desktopstærð]
   * og þá gerist sjálfkrafa media query bakvið tjöldin sem setur
   * þessi gildi fyrir alla breikpúntana
   */
  heroText: {
    fontSize: ['34', '60', '60', '100'],
  },
  h1: {
    fontSize: ['32', '32', '48', '60'],
  },
  h2: {
    fontSize: ['26', '26', '34', '48'],
  },
  h3: {
    fontSize: ['20', '20', '20', '32'],
  },
  h4: {
    fontSize: ['18', '18', '18', '24'],
  },
  h5: {
    fontSize: ['16', '16', '16', '18'],
  },
  h6: {
    fontSize: ['16', '16', '18'],
  },
  textXSmall: {
    fontSize: ['10', '10', '12'],
  },
  textSmall: {
    fontSize: ['12', '12', '12', '14', '14', '15'],
  },
  text: {
    fontSize: ['14', '14', '15', '15'],
  },
  textLarge: {
    fontSize: ['16', '16', '18', '18'],
  },
  textIntro: {
    fontSize: ['16', '18', '18', '20'],
  },
}
