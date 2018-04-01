const merge = require('webpack-merge')
const stylLoader = require('../config/loaders/styl')
const svgLoader = require('../config/loaders/svg')
const paths = require('../config/paths')

module.exports = storybookBaseConfig => {
  /* eslint-disable no-param-reassign */
  const config = merge(storybookBaseConfig, {
    devtool: 'source-map',
    target: 'web',
    name: 'remessa-lp-ds',
    resolve: { modules: [paths.src] },
    module: {
      rules: [{
        test: /\.styl$/,
        include: [paths.src],
        use: [{
          loader: require.resolve('style-loader'),
          options: { sourceMap: true }
        }, ...stylLoader.use]
      }, {
        test: /\.md$/,
        use: [require.resolve('html-loader'), require.resolve('markdown-loader')]
      }]
    }
  }, svgLoader.config)

  return config
    /* eslint-enable */
}
