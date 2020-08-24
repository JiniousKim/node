const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
	contentBase: './public',
	hot: true,
	host: '218.234.32.12',
	port: '3000',
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiller = webpack(config);
const server = new webpackDevServer(compiller, options);

server.listen(3000, '218.234.32.12', () => {
	console.log('dev server listening on port 3000');
});
