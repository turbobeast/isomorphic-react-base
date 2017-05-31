const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      }
    ]
  }
}
