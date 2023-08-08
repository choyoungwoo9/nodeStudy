const http = require('http');


const server = http.createServer(function(req, res){
	console.log(req.url, req.method, req.headers);
	// console.log(res);
	//브라우저에게 HTML코드라는것을 알려줌
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My FirstPage</title></head>');
	res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
	res.write('</html>');
	res.end();
	//오류 생김
	// res.write("abc");
});

server.listen(3000);