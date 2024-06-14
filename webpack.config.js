const path = require('path')

const webpackConfig = {
  entry: {
    monkey_script: './src/entry/monkey_script.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'production',
  module: {
    rules: [],
  },
  externals: [],
  plugins: [],
}

const HtmlWebpackPlugin = require('html-webpack-plugin')
// 增加Web端devServer配置
webpackConfig.devServer = {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  compress: true,
  port: 3131,
  hot: true,
}
webpackConfig.plugins.push(
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    filename: 'index.html',
    inject: true,
  })
)

module.exports = webpackConfig
