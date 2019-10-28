const fs = require('fs');
const path = require('path');

//Create folder (by default these are async but there is a sync
// version too, i.e. the one where you wait till the process is complete)
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
// 	if (err) throw err;
// 	console.log('Folder created...');
// });
//Create and write to file (needed to comment out fs.mkdir for it to work)
// fs.writeFile(
// 	path.join(__dirname, 'test', 'hello.txt'),
// 	'Well, here I am, world',
// 	err => {
// 		if (err) throw err;
// 		console.log('File written to...');
// 		//add additional text
// 		fs.appendFile(
// 			path.join(__dirname, 'test', 'hello.txt'),
// 			' I would love to learn Node.js',
// 			err => {
// 				if (err) throw err;
// 				console.log('File written to...');
// 			}
// 		);
// 	}
// );
//Read a file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

//Rename a file

fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', 'helloPeople.txt'),
	(err, data) => {
		if (err) throw err;
		console.log('File renamed...');
	}
);
