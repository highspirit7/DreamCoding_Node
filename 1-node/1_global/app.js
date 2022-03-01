// 해당 자바스크립트 파일을 Node.js용으로 만들기 위한 코드
// 그러면 global과 같은 각종 노드에 제공하는 것들의 타입을 체크할 수 있다. 
const fs = require('fs');

console.log(fs);

global.hello = () => {
  // 콘솔로그도 노드의 global 객체에서 제공해주는 메소드이다.
	global.console.log('ㅇㅏㄴ녀ㅇ');
};

global.hello();
hello();
