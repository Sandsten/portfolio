const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	target: 'web',
	mode: 'development',
	output: {
		publicPath: '/',
	},
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
	devServer: {
		host: '0.0.0.0', // Required for working inside a docker container
		port: 3001,
		historyApiFallback: true, // 404 responses will fall back to index.html. Required for using react-router-dom
		// disableHostCheck: true // Might have to be enabled in order to run dev server in docker container
		client: {
			overlay: true,
		},
	},
	devtool: 'source-map', // Remove this when in production, takes alot of space!
	resolve: {
		// This is the order in which extensions are tested against imports
		// e.g we can use "import File from '../path/to/file';" instead of "import File from '../path/to/file.ts';""
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				use: { loader: 'ts-loader' },
				exclude: /node_modules/,
			},
			{
				test: /\.glsl$/,
				loader: 'webpack-glsl-loader',
			},
			{
				test: /\.(css|scss)$/,
				// Order of modules matters
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|png|svg|gif|pdf|webp|webm|ico)$/,
				type: 'asset/resource',
			},
			{
				//Load fonts
				test: /\.(woff|woff2|eot|ttf|otf|svgs)$/,
				type: 'asset/resource',
				generator: {
					filename: '[name][ext]',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			favicon: './src/assets/images/favicon.ico'
		}),
	],
};
