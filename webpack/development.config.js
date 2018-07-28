const baseWebpackConfig = require('./base.config')

module.exports = Object.assign(baseWebpackConfig, {
  devtool: "eval-source-map",
  devServer: {
    compress: true,
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
  }
})
