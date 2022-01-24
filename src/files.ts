import fs from 'fs';

export function read(path, cb) {
	fs.readFile(path, 'utf8' , (err, data) => {
		if (err) {
			console.error(err)
			return;
		}
		cb(data.split('\n'));
	})
}

export function write(path, content, cb = undefined) {
	fs.writeFile(path, content, err => {
		if (err) {
			console.error(err)
			return;
		}
		if (cb) cb();
	})
}
