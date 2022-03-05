// 해당 자바스크립트 파일을 Node.js용으로 만들기 위한 코드
// 그러면 global과 같은 각종 노드에 제공하는 것들의 타입을 체크할 수 있다.
const fs = require('fs');

let count = 0;

function increase() {
	count++;
}

function getCount() {
	return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;

// 그냥 exports.increace 이런식으로 사용할 수도 있다.
// 그런데 아래 코드처럼 exports에 빈 객체를 할당(메모리 상에서 다른 곳을 가리키게 된다.)에서하면 
// 당연히 module.exports와 다른 것을 가리키게 되어서 module.exports처럼 사용할 수는 없다.
exports = {};
console.log(exports);
console.log(module.exports);
