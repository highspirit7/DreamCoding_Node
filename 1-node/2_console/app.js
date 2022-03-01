console.log('logging');

// log level
// 배포할 때는 로그를 출력하지 않도록 레벨 별로 정말 출력할 건지 파일에 저장할 건지 컨트롤 하기 위해 개발할 때부터 레벨 별로 다르게 콘솔 로그를 이용하는 게 좋다.
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warning'); // 발생하면 안되는것이지만 치명적이지는 않은 ; 경보
console.error('error'); // 사용자 에러, 시스템 에러 등 모든 에러

// assert : 특정 조건이 맞지 않을 때 로그를 출력할 수 있게 해준다.
// 아래 예제의 경우 'not same!'이 출력된다.
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

console.clear();

// pring object
const student = { name: 'Jake', age: 33, company: { name: 'none' } };
console.log(student);
console.table(student);
console.dir(student, { depth: 0 }); // dir의 경우 여러 옵션을 넣을 수 있다. 예를 들어 depth를 0으로 넣으면 객채의 제일 상위에 있는 depth 파트만 출력된다.

// measuring time
console.time('for loop');
for (let i = 0; i < 20; i++) {}
console.timeEnd('for loop');

// counting : 함수가 몇번 호출될 때마다 카운팅하며 그 횟수를 출력
function test() {
	console.count('test function');
}
test();
console.countReset('test function');
test();

// trace : 디버깅 시 해당 함수가 어디서부터 호출된 건지 추적할 수 있게 해준다.
function f1() {
	f2();
}
function f2() {
	f3();
}
function f3() {
	console.log('f3');
	console.trace();
}
f1();
