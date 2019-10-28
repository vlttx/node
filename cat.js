class Cat {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greeting() {
		console.log(
			`Hello! My name is ${this.name} and I am ${this.age} years old.`
		);
	}
}
console.log(__dirname, __filename); // we have access to Module Wrapper Function that has exports, require, module, __filename and __dirname)
module.exports = Cat;
