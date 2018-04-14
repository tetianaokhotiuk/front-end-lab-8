 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   
   plugins: [
     new UglifyJSPlugin(),
     new BundleAnalyzerPlugin({
		 openAnalyzer: true,
     }),
     new OptimizeCssAssetsPlugin({
     	 assetNameRegExp: /\.scss$/g,
         cssProcessor: require('cssnano'),
         cssProcessorOptions: {
            discardDuplicates: { removeAll: true },
            discardComments: {removeAll: true }
         },
         canPrint: true
     })
   ]
 });