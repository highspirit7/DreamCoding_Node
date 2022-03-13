// 파일은 한 번 다 읽고 새로운 파일을 만들어 쓰는 방식
const fs = require('fs');

// RSS : Resident Set Size(The portion of memory occupied by a process that is held in main memory; RAM)
const beforeMem = process.memoryUsage().rss;

// 아래 readFile 메소드의 콜백함수 매개변수가 err와 data가 있다. 그런데 data말고 
// 다른 매개변수들이 필요없는 상황에서는 아래와 같이 underscore를 활용할 수 있다.
// https://stackoverflow.com/questions/32197927/standard-conventions-for-indicating-a-function-argument-is-unused-in-javascript
fs.readFile('./file.txt', (_, data) => {
	fs.writeFile('./file2.txt', data, () => {});

	// calculate
	const afterMem = process.memoryUsage().rss;
	const diff = afterMem - beforeMem;
	const consumed = diff / 1024 / 1024;
	console.log(diff);
	console.log(`Consumed Memory: ${consumed}MB`);
});
