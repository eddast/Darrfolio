import { createGlobalStyle } from 'styled-components'

/**
 * Global css fyrir verkefnið
 */
export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-size: ${({ theme }) => theme.fontSizes['14']}px;
		scroll-behavior: smooth;

		@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
			font-size: ${({ theme }) => theme.fontSizes['16']}px;
		}
	}

	body {
		overflow-x: hidden;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body, h1, h2, h3, h4, h5, h6, p, ol, ul, blockquote {
		margin: 0;
		padding: 0;
		font-weight: ${({ theme }) => theme.fontWeights.medium};
		font-family: ${({ theme }) => theme.fonts.standard};
		line-height: ${({ theme }) => theme.lineHeights.large};
		color: ${({ theme }) => theme.colors.text};
		scroll-margin-top: 64px;
	}

	a {
		text-decoration: none;
	}
`
