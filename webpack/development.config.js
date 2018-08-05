const webpack = require('webpack')
const baseWebpackConfig = require('./base.config')

module.exports = Object.assign(baseWebpackConfig, {
  output: Object.assign(baseWebpackConfig.output, {
    publicPath: 'http://localhost:8080/'
  }),
  devtool: "eval-source-map",
  devServer: {
    compress: true,
    hot: true,
    publicPath: 'http://localhost:8080/',
    proxy: {
      '/api': {
        target: 'https://api.robinhood.com',
        pathRewrite: {'^/api' : ''},
        secure: false,
        logLevel: 'debug',
        changeOrigin: true
      }
    },
    historyApiFallback: {
      index: '/'
    }
  },
  plugins: [
    ...baseWebpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
})
