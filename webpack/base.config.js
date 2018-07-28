const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {join, resolve} = require('path');

const VENDOR_PATH = 'vendor';

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: "initial"
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   include: resolve('./src'),
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['env']
      //     }
      //   }
      // },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.css$/,
        use: ['text-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin(
      [{
        from: resolve('./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'),
        to: join(VENDOR_PATH, 'webcomponentsjs')
      }, {
        from: resolve('./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'),
        to: join(VENDOR_PATH, 'webcomponentsjs')
      }, {
        from: resolve('./node_modules/@webcomponents/webcomponentsjs/bundles'),
        to: join(VENDOR_PATH, 'webcomponentsjs', 'bundles')
      }, {
        from: resolve('./node_modules/lato-font/css/'),
        to: join(VENDOR_PATH, 'lato-font', 'css')
      }, {
        from: resolve('./node_modules/lato-font/fonts/'),
        to: join(VENDOR_PATH, 'lato-font', 'fonts')
      }]
    ),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
