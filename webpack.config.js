const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		index: './resource/index.js',
		about: './resource/about.js',
		without_redux: './resource/without_redux.js',
		with_redux: './resource/with_redux.js',
		main: './resource/main.js',
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
		new HtmlWebpackPlugin({
			template: './resource/with_redux.html',
			filename: './with_redux.html',
			chunks: ['with_redux'],
		}),
		new HtmlWebpackPlugin({
			template: './resource/main.html',
			filename: './main.html',
			chunks: ['main'],
		}),
	],
};
