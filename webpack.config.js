var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  context: __dirname,
  entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
		    'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'index.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath : '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
                  'react-hot',
                  'babel?plugins[]=transform-es2015-modules-commonjs,presets[]=react'
         ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
      },
    ]
  },
  postcss: function () {
    return [autoprefixer, precss]
  },
  sassLoader: {
    includePaths: [path.join(__dirname, 'scss')]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('main.css')
  ]
}
