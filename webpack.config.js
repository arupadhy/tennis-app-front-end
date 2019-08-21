const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test : /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']}
    ]
  },

  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
    new CopyWebPackPlugin([{
      from: './images/*.jpg',
      flatten: true,
    }]),
  ]
}
