const http = require('http');

http.createServer(function (request, response) {
	request.on('data', function (data) {
		console.log('Post Data: ', data);
	});
}).listen(9003);
