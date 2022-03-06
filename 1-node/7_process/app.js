const process = require('process');

// console.log(process.execPath);
// console.log(process.version);
// console.log(process.pid);
// console.log(process.ppid);
// console.log(process.platform);
// console.log(process.env); // 해당 컴퓨터 상의 모든 환경변수
// console.log(process.uptime());
// console.log(process.cwd());
// console.log(process.cpuUsage());

setTimeout(() => {
	console.log('setTimeout');
}, 0);

// 태스크 큐에 다른 것들이 담겨 있어도 태스크 큐에서 제일 앞부분에 해당 함수를 위치시키는 메소드
// 그래서 setTimeout 보다 먼저 실행된다.
process.nextTick(() => {
	console.log('nextTick');
});

for (let i = 0; i < 33; i++) {
	console.log(`for loop count : ${i + 1}`);
}
