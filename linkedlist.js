import fs from "fs/promises";
import cheerio from "cheerio";
import axios from "axios";

const init = async () => {
	// Load the initial website
	let nothing = 12345;
	let prev = nothing;
	while (nothing) {
		const URL = "http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=";
		const { data } = await axios.get(URL + nothing);
		const split = data.split("is").map(e => e.trim());
		let nextNothing = split[split.length - 1];
		prev = nothing;
		console.log(data);
		if (!nextNothing) {
			nothing = prev / 2;
			console.log("division: ", nothing);
		}
		else {
			nothing = nextNothing;
		}
	}
	console.log("Solution:", prev / 2);
}

init();