const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Removes unused files from dist/

module.exports = {
  target: 'web',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../server/build'),
    filename: '[name].[contenthash].frontend.js', // Content hash is a hash based on the file content
    publicPath: '/'
  },
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
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ['file-loader']
      },
      {
        //Load fonts
        test: /\.(woff|woff2|eot|ttf|otf|pdf)$/,
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
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  optimization: {
    moduleIds: 'hashed', // Make vendor hash stay consistent between builds
    runtimeChunk: 'single', // Generate a single bundle for all runtime code. What's runtime? Code that is executed while your code is running, especially those instructions that you did not write explicitly, but are necessary for the proper execution of your code.
    splitChunks: {
      cacheGroups: {
        // Split node modules such as lodash into a separate vendor, since these packages are rarely updated
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'node_modules',
          chunks: 'all'
        }
      }
    }
  }
};
