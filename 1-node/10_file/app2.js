const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf8')
	.then((data) => console.log(data))
	.catch(console.error);

fs.writeFile('./text.txt', 'Hello! Korea!') //
	.catch(console.error);

// 파일을 덮어쓰는게 아니라 기존 내용에 추가하는 메소드
fs.appendFile('./text.txt', '\nHello! South Korea!') //
	.catch(console.error);

fs.copyFile('./text.txt', './text2.txt').catch(console.error);

fs.mkdir('sub-folder').catch(console.error);

// string[] 형태로 해당 경로 내 모든 파일과 폴더 이름을 리턴한다
fs.readdir('./').then(console.log).catch(console.error);
