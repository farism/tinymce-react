const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const {
  addPlugins,
  babel,
  createConfig,
  entryPoint,
  extractText,
  file,
  match,
  setOutput,
} = require('webpack-blocks')

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput({
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
  }),
  addPlugins([new HtmlWebpackPlugin()]),
  babel(),
])
