const path = require('path');

// 아래와 같이 운영체제에 따라 파일 경로 나타내는 포맷이 다르다.
// POSIX(Unix : Mac, Linux) : 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

// console.log(path.sep); // 경로 구분자
// console.log(path.delimiter); // 환경변수 구분자

// console.log(process.env.PATH); // 여기서 환경변수 구분자 확인 가능

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

// 파싱된 객체를 문자열로 변환
const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__filename));
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize : 정상적인 형태의 경로로 변환
console.log(path.normalize('./folder///////sub'));

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
