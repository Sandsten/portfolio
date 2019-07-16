const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].frontend.js'
  },
  devServer: {
    // host: '0.0.0.0',
    // publicPath: '/assets/',
    // contentBase: path.resolve(__dirname, './views'),
    // watchContentBase: true,
    // compress: true,
    port: 3000
  },
  devtool: 'inline-source-map', // Remove this when in production, takes alot of space!
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.glsl$/,
        loader: 'webpack-glsl-loader'
      },
      {
        test: /\.scss$/,
        // Order of modules matters
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};
