// const person = require('./person');
// const Logger = require('./logger');

// const Cat = require('./cat');

// console.log(person);

// const myKitty = new Cat('Priscilla', 2);

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener', data));
// logger.log('Hi there');
// myKitty.greeting();
const http = require('http');
const path = require('path');
const fs = require('fs');
//let's create a server that gets req and res everytime a file is sent
const server = http.createServer((req, res) => {
	// console.log(req.url); to see where the request is coming from
	// 	if (req.url === '/') {
	// 		fs.readFile(
	// 			path.join(__dirname, 'public', 'index.html'),
	// 			(err, content) => {
	// 				if (err) throw err;
	// 				res.writeHead(200, { 'Content-Type': 'text/html' });
	// 				res.end(content);
	// 			}
	// 		);
	// 	}

	// 	if (req.url === '/about') {
	// 		fs.readFile(
	// 			path.join(__dirname, 'public', 'about.html'),
	// 			(err, content) => {
	// 				if (err) throw err;
	// 				res.writeHead(200, { 'Content-Type': 'text/html' });
	// 				res.end(content);
	// 			}
	// 		);
	// 	}

	// 	if (req.url === '/api/users') {
	// 		//example for json REST

	// 		const users = [
	// 			{ name: 'Victoria', location: 'Dallas, TX' },
	// 			{ name: 'John', location: 'Austin, TX' }
	// 		];
	// 		fs.readFile(
	// 			path.join(__dirname, 'public', 'about.html'),
	// 			(err, content) => {
	// 				if (err) throw err;
	// 				res.writeHead(200, { 'Content-Type': 'application/json' });
	// 				res.end(JSON.stringify(users)); // turning JS array of objects to json
	// 			}
	// 		);
	// 	}

	//the above stuff is just an example and is not as useful as we build things manually,
	//plus no access to having css or html

	//Build file path

	let filePath = path.join(
		__dirname,
		'public',
		req.url === '/' ? 'index.html' : req.url //use url to decide which file to load
	);
	console.log(req.url);
	// res.end();

	//Extension of file

	let extname = path.extname(filePath); //we also want to evaluate the extension, so that
	//we would know the content type -- so we set content type so we could check it
	console.log(extname);
	//Initial content type

	let contentType = 'text/html'; //initial or default content type

	//check ext and set content type

	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
		default:
			contentType = 'text/html';
			break;
	}

	//Read file

	fs.readFile(filePath, (err, content) => {
		if (err) {
			if ((err.code = 'ENOENT')) {
				//Page not found
				fs.readFile(
					path.join(__dirname, 'public', '404.html'),
					(err, content) => {
						res.writeHead(200, { 'Content-Type': 'text/html' });
						res.end(content, 'utf8');
					}
				);
			} else {
				//Some other error
				res.writeHead(500);
				res.end(`Server Error: ${err.code}`);
			}
		} else {
			//Success
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(content, 'utf8');
		}
	});
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
