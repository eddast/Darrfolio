// eslint-disable-next-line
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

// eslint-disable-next-line
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin())
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()]
    }

    return config
  },
  images: {
    domains: ['images.prismic.io'],
    deviceSizes: [320, 375, 425, 768, 1024, 1440, 1920, 2560, 3840],
  },
}
