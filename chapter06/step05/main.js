const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

http.createServer(function (request, response) {
	fs.readFile('./main/index.ejs', 'utf8', function (error, data) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(ejs.render(data, {
			name: 'RintIanTta',
			description: 'Hello EJS With Node.js ... !'
		}));
	});
}).listen(9003);
