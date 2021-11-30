import fs from "fs/promises"
import axios from "axios";
import jpickle from "jpickle";


const init = async () => {
	const URL = "http://www.pythonchallenge.com/pc/def/banner.p";
	const { data } = await axios.get(URL);
	const pickle_appropriation = jpickle.loads(data);
	for (const line of pickle_appropriation) {
		// Go through each item in the list and repeat the character n times
		let output = "";
		for (const [char, amount] of line) {
			output += char.repeat(amount);
		}
		console.log(output);
	}
}

init();