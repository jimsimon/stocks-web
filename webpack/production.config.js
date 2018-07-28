const baseWebpackConfig = require('./base.config')

module.exports = Object.assign(baseWebpackConfig, {
  devtool: "source-map"
})
