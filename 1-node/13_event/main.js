const logger = require('./logger.js');
const emitter = new logger.Logger();

// 이렇게 또다른 EventEmiiter의 인스턴스로는 log 이벤트를 감지할 수 없다.
// const EventEmitter = require('events');
// const emitter2 = new EventEmitter();

// emitter2.on('log', (args) => {
// 	console.log(args);
// });

emitter.on('log', (args) => {
	console.log(args);
});

emitter.log(() => {
	console.log('.... doing something');
});
