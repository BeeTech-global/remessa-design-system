const paths = require('../paths')

const use = [{
  loader: require.resolve('url-loader')
}]

exports.use = use

exports.config = {
  module: {
    rules: [{
      test: /\.svg$/,
      include: [paths.src],
      use
    }]
  }
}
