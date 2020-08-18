const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
	if (request.method === 'GET') {
		fs.readFile('./main/HTMLPage.html', function (error, data) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		});
	}

	if (request.method === 'POST') {
		request.on('data', function (data) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end('<h1>' + data + '</h1>');
		});
	}
}).listen(9003);
