const fs = require('fs');

// 항상 immediate가 먼저 출력되는 것이 보장된다. 
// 그 이유는 같은 I/O 주기 내에서는 setImmediate가 먼저 실행되기 때문.
// https://short-term.tistory.com/8
fs.readFile('a.js', (result) => {
	setTimeout(() => {
		console.log('timeout');
	}, 0);
	setImmediate(() => {
		console.log('immediate');
	});
});
