const webpack = require('webpack');
const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'src');
const BIN_DIR = path.resolve(__dirname, 'bin');
const NODE_MODULES = path.resolve(__dirname, 'node_modules');
const moment = require('moment');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

 module.exports = {
  context: SRC_DIR,
  entry: './app.js',
  output: {
    path: BIN_DIR,
    filename: 'app.bundle.js'
  },

   module: {
    rules: [

      // css
      {
        test: /\.scss$/,
        include: SRC_DIR,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },

      // js
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },

      // html
      {
        test: /\.html$/,
      }
    ]
  },

  plugins: [

   new HTMLWebpackPlugin({
      title: 'Webpack is awesome',
      filename: 'index.html',
      template: './app.html',
      inject: true
    }),
    new CleanWebpackPlugin(['bin']),
    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)

  ]
 };

