const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Removes unused files from dist/

module.exports = {
	target: 'web',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].[contenthash].frontend.js', // Content hash is a hash based on
		publicPath: '/',
	},
	resolve: {
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
				test: /\.scss$/,
				// Order of modules matters
				use: [
					process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				use: ['file-loader'],
			},
			{
				//Load fonts
				test: /\.(woff|woff2|eot|ttf|otf|pdf)$/,
				use: ['file-loader'],
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
			template: path.join(__dirname, 'src/index.html'),
			filename: 'index.html',
			favicon: 'src/favicon.ico',
		}),
	],
	optimization: {
		runtimeChunk: 'single', // Generate a single bundle for all runtime code. What's runtime? Code that is executed while your code is running, especially those instructions that you did not write explicitly, but are necessary for the proper execution of your code.
		splitChunks: {
			chunks: 'all',
		},
	},
};
