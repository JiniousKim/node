const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './resource/index.js',
		about: './resource/about.js',
		without_redux: './resource/without_redux.js',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name]_bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './resource/index.html',
			filename: './index.html',
			chunks: ['index'],
		}),
		new HtmlWebpackPlugin({
			template: './resource/about.html',
			filename: './about.html',
			chunks: ['about'],
		}),
		new HtmlWebpackPlugin({
			template: './resource/without-redux.html',
			filename: './without-redux.html',
			chunks: ['without_redux'],
		}),
	],
};
