const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputDir = path.join(__dirname, "build/")

const isProd = process.env.NODE_ENV === 'production'

const PATHS = {
  build: `${__dirname}/build`,
  src: `${__dirname}/src`,
}

const devPlugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: `${PATHS.src}/index.html`,
  }),
]

module.exports = {
  devServer: {
    contentBase: PATHS.build,
    host: 'localhost',
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      './src/Index.bs.js',
    ],
  },
  mode: isProd ? 'production' : 'development',
  output: {
    filename: 'Index.js',
    path: PATHS.build,
    publicPath: '/',
  },
  plugins: devPlugins,
}
