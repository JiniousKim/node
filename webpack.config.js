const path = require('path');

module.exports = {
	entry: './resources/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'index.js',
	},
};
