// js 확장자를 붙이지 않으면 에러 발생!!
// import { increase, getCount } from './counter.js';

// 이렇게 * 을 사용해서 해당 모듈 파일 자체를 특정 이름으로 바꾸어 접근할 수도 있다.
import * as counter from './counter.js';

counter.increase();
counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount());
