// 버퍼를 사용하면 데이터를 바이트 단위로 처리할 수 있게 된다.
const fs = require('fs');
const buf = Buffer.from('Hey');

// console.log(buf);
// console.log(buf[0]);
// console.log(buf[1]);
// console.log(buf[2]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(3);
const buf3 = Buffer.allocUnsafe(3); // faster, 그러나 초기화를 해주지 않아서 메모리 상에 있던 기존 값들이 들어갈 수도 있다.

buf2[0] = 72;
buf2[1] = 101;
buf2[2] = 121;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
