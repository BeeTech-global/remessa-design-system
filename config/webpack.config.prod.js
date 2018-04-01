// const webpack = require('webpack')
const webpack = require('webpack')
const merge = require('webpack-merge')
const stylLoader = require('./loaders/styl')
const svgLoader = require('./loaders/svg')
const RemoveJSFromBundle = require('./remove-js-bundle')
const paths = require('./paths')
const pkg = require('../package.json')

const ENTRY_NAME = 'remessa-lp-ds'

const baseConfig = {
  bail: true,
  devtool: false,
  target: 'web',
  entry: { [ENTRY_NAME]: paths.beePollen },
  output: {
    path: paths.appBuild,
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    modules: ['node_modules', paths.src],
    extensions: ['.js', '.json', '.jsx']
  },
  module: { strictExportPresence: true },
  plugins: [
    new RemoveJSFromBundle([ENTRY_NAME]),
    new webpack.BannerPlugin(`${ENTRY_NAME} v${pkg.version}`)
  ]
}

module.exports = merge(baseConfig, stylLoader.config, svgLoader.config)
