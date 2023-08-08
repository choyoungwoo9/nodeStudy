const http = require('http');


const server = http.createServer(function(req, res){
	console.log(req);
	// console.log(res);
});

server.listen(3000);