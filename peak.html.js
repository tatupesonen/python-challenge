const fs = require('fs/promises');
const axios = require("axios");
const jpickle = require('jpickle');


const init = async () => {
	const URL = "http://www.pythonchallenge.com/pc/def/banner.p";
	const { data } = await axios.get(URL);
	const vittusaatanakurkku = jpickle.loads(data);
	for (const line of vittusaatanakurkku) {
		// Go through each item in the list and repeat the character n times
		let output = "";
		for (const [char, amount] of line) {
			output += Array(amount).fill().reduce((acc) => acc += char, "");
		}
		console.log(output);
	}
}

init();