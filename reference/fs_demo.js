const fs = require('fs');
const path = require('path');

//Create folder (by default these are async but there is a sync
// version too, i.e. the one where you wait till the process is complete)
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
// 	if (err) throw err;
// 	console.log('Folder created...');
// });
//Create and write to file (needed to comment out fs.mkdir for it to work)
fs.writeFile(
	path.join(__dirname, 'test', 'hello.txt'),
	'Well, here I am, world',
	err => {
		if (err) throw err;
		console.log('File written to...');
	}
);
