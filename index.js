const person = require('./person');
const Logger = require('./logger');

const Cat = require('./cat');

// console.log(person);

// const myKitty = new Cat('Priscilla', 2);

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener', data));
// logger.log('Hi there');
// myKitty.greeting();
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// console.log(req.url); to see where the request is coming from
	if (req.url === '/') {
		fs.readFile(
			path.join(__dirname, 'public', 'index.html'),
			(err, content) => {
				if (err) throw err;
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(content);
			}
		);
	}

	if (req.url === '/about') {
		fs.readFile(
			path.join(__dirname, 'public', 'about.html'),
			(err, content) => {
				if (err) throw err;
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(content);
			}
		);
	}

	if (req.url === '/api/users') {
		//example for json REST

		const users = [
			{ name: 'Victoria', location: 'Dallas, TX' },
			{ name: 'John', location: 'Austin, TX' }
		];
		fs.readFile(
			path.join(__dirname, 'public', 'about.html'),
			(err, content) => {
				if (err) throw err;
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify(users)); // turning JS array of objects to json
			}
		);
	}
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
