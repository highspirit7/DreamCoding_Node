const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
// createGzip이 리턴하는 값의 타입을 계속 타고 들어가다보면 결국 pipe 메소드 내부
// 제네릭이 상속하는 NodeJS.WritableStream을 상속하고 있다.
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream);

piping.on('finish', () => {
	console.log('done!!');
});
