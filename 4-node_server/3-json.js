const http = require('http');
// const http2 = require('http2') // https
const fs = require('fs');

const courses = [{ name: 'Node.js' }, { name: 'Vue.js' }, { name: 'React.js' }, { name: 'TypeScript' }];

const server = http.createServer((req, res) => {
	const url = req.url; // what?
	const method = req.method; // how?, action?

	if (url === '/courses') {
		if (method === 'GET') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(courses));
		} else if (method === 'POST') {
			const body = [];
			req.on('data', (chunk) => {
				console.log(chunk);
				body.push(chunk);

				console.log('---------');
				console.log(body);
				console.log(body.length);
        // 나름대로 공부해본 결과 body에 버퍼가 다수가 들어가는 경우 concat이 필요하지만 
        // 지금과 같이 버퍼 하나만 들어가는 상황에서는 굳이 필요없어보인다.
				console.log(Buffer.concat(body));
				console.log(Buffer.concat(body).toString());
				console.log('---------');
			});

			req.on('end', () => {
        // 여기서 toString해주지 않아도 JSON.parse 될 때 알아서 문자열로 변환되어 처리된다.
				// const bodyStr = Buffer.concat(body).toString();
				const course = JSON.parse(body[0]);
				courses.push(course);
				console.log(course);
				res.writeHead(201);
				res.end();
			});
		}
	}
});

server.listen(8080);
