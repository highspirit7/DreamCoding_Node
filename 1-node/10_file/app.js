const fs = require('fs');

// try {
//   // 동기적으로 실행되는 메소드라 가급적 추천하지 않음
//   // 이렇게 try catch문으로 감싸지 않는다면 에러 발생시 노드 구동이 멈춘다.
// 	fs.renameSync('./text.txt', './text-new.txt');
// } catch (error) {
// 	console.error(error);
// }

// 비동기적으로 동작하는 메소드 ; 뒤에 콘솔 로그가 있다면 먼저 찍히고 에러가 출력된다.
// fs.rename('./text-new.txt', './text.txt', (error) => {
// 	console.log(error);
// });

fs.promises
	.rename('./text-new.txt', './text.txt')
	.then(() => console.log('done'))
	.catch(console.error);
