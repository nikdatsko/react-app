const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [isDevMod && 'webpack-hot-middleware/client', './src/index.js'].filter(
    Boolean,
  ),

  plugins: [
    !isDevMod
      && new CleanWebpackPlugin('./public', {
        root: path.resolve(__dirname, '../'),
      }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
});
