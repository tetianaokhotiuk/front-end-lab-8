 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path = require('path');
 const SRC_DIR = path.resolve(__dirname, 'src');
 const BIN_DIR = path.resolve(__dirname, 'bin');
 const NODE_MODULES = path.resolve(__dirname, 'node_modules');

 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './bin'
   },

   devServer: {
    port: 8080,
    stats: 'errors-only',
    clientLogLevel: 'warning',
    compress: true,
    historyApiFallback: true,
    watchContentBase: true
  }

 });