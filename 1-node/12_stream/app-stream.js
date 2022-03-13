const fs = require('fs');

const data = [];
const readStream = fs
	.createReadStream('./file.txt', {
		// highWaterMark: 8, // 64kb가 디폴트
		// encoding: 'utf-8',
	})
	.on('data', (chunk) => {
		console.log(chunk);
		data.push(chunk);
		// console.count('data');
	})
	.on('end', () => {
    // join메소드가 배열의 모든 요소(버퍼값)을 합쳐서 문자열로 변환해주고 그 문자열을 리턴하는 것으로 보인다.
		console.log(data.join(''));
	})
	.on('error', (error) => {
		console.error(error);
	});
