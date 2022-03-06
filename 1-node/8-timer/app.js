console.log('code1');
setTimeout(() => {
  // 두번째 혹은 세번째로 실행될 수 있다.
  // 0을 넣어도 실제로는 0ms보다 시간이 더 걸릴 수 밖에 없기 때문.
	console.log('setTimeout 0');
}, 0);

console.log('code2');
setImmediate(() => {
	// 두번째 혹은 세번째로 실행될 수 있다.
	console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {
  // 제일 먼저 실행됨
	console.log('process.nextTick');
});
