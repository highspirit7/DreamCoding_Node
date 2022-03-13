const EventEmitter = require('events');
const emitter = new EventEmitter();

function callback1(args) {
	console.log('first callback - ', args);
}

emitter.on('jake', callback1);

emitter.on('jake', (args) => {
	console.log('second callback - ', args);
});

emitter.emit('jake', { message: 1 });
emitter.emit('jake', { message: 2 });
emitter.removeListener('jake', callback1);
emitter.removeAllListeners();
emitter.emit('jake', { message: 3 });
