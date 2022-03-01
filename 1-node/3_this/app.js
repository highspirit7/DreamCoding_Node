function helloThis() {
	console.log('----general function call----');
	console.log(this);
	console.log(this === global); // true
}

helloThis();

class A {
	constructor(num) {
		this.num = num;
	}

	memberFunction() {
		console.log('----class----');
		console.log(this);
		console.log(this === global); // false
	}
}

const a = new A(12);
a.memberFunction();

// 브라우저에서는 글로벌 스코프에서 this를 참조하면 글로벌 객체 즉 Window를 가리키지만
// 노드에서는 글로벌 스코프에서 module.exports를 가리킨다.
console.log('---global scope----');
console.log(this);
console.log(this === module.exports); // true
