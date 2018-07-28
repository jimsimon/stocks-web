const devWebpackConfig = require('./webpack/development.config')
const productionWebpackConfig = require('./webpack/production.config')

module.exports = mode => mode === 'development' ? devWebpackConfig : productionWebpackConfig
