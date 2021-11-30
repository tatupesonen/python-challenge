const fs = require('fs/promises');


const init = async () => {
	const data = await fs.readFile("input.txt", { encoding: "utf-8"});

	const hm = {};
	for(const letter of data) {
		if(! hm[letter]) {
			hm[letter] = 1;
		} else {
			hm[letter] += 1;
		}
	}
	console.log(hm);
}

init();