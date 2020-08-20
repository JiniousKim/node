const path = require('path');

module.exports = {
	mode: 'production',
	entry: './resources/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'index.js',
	},
};
