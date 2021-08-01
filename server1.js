const http = require('http');
const fs = require('fs');
//similiar to eventModule, don't need to write eventname, must write port number
//http default port = 80, https default port = 443
//포트가 다르면 호스트가 같더라도 다른 사이트처럼 동작 할 수 있음 
//request and respose: request를 통해 올바를 요청인지 확인가능
const server = http.createServer((req,res) => {
	console.log('server start');
	fs.readFile('./server2.html', (err,data) => {
		if(err)
			throw err;
		res.end(data);
	});
}).listen(8080, () => {
	console.log('wating on server 8080....');
});

server.on('listening',() => {
	console.log('wating on 8080 port');
});

server.on('error',(error) => {
	console.error(error);
});