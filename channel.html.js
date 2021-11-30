import axios from "axios";
import zip from "jszip";

const init = async () => {
	let nothing = 90052
	let comments = [];
	const URL = "http://www.pythonchallenge.com/pc/def/channel.zip";
	const { data } = await axios({
		url: URL,
		method: 'GET',
		responseType: "arraybuffer"
	});

	const zipFile = await zip.loadAsync(data);
	while (nothing) {
		try {
			const curFile = await zipFile.files[`${nothing}.txt`];
			comments = [...comments, curFile.comment];
			const contents = await curFile.async('text');
			nothing = contents.match(/Next nothing is ([0-9]+)/)[1];
			console.log(nothing);
		}
		catch {
			console.log("final file: ", nothing);
			console.log(comments.join(""));
			break;
		}
	}
}

init();