// const fontMagician = require('postcss-font-magician')
const flexBugsFixes = require('postcss-flexbugs-fixes')
const mqPacker = require('css-mqpacker')
const autoprefixer = require('autoprefixer')
// const cssnano = require('cssnano')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const paths = require('../paths')

const use = [{
  loader: require.resolve('css-loader'),
  options: {
    sourceMap: true,
    // minimize: process.env.NODE_ENV === 'production'
  }
}, {
  loader: require.resolve('postcss-loader'),
  options: {
    sourceMap: true,
    plugins: () => [
      // fontMagician,
      // cssnano({
      //   preset: 'advanced'
      // }),
      flexBugsFixes,
      autoprefixer({
        browsers: ['last 2 versions', 'ie >= 10', '> 5%']
      }),
      mqPacker()
    ]
  }
}, { loader: require.resolve('stylus-loader') }]

exports.use = use

exports.config = {
  module: {
    rules: [{
      test: /\.styl$/,
      include: [paths.src],
      use: ExtractTextPlugin.extract({
        use,
        fallback: 'style-loader?sourceMap'
      })
    }]
  },
  plugins: [new ExtractTextPlugin('[name].css')]
}
