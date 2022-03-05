// os(운영체제) 관한 정보 담고 있는 모듈
const os = require('os');

// 이스케이프 문자
console.log(os.EOL === '\n'); //mac
console.log(os.EOL === '\r\n'); // window

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());

