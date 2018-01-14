const {resolve} = require('path');

module.exports = {
  entry: './index.js',
  context: __dirname,
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'main.bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 4200,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: []
};
