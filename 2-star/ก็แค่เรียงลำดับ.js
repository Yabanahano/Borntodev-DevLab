const rl = require("readline").createInterface(process.stdin);
let inputList = [];

rl.on("line", (line) => {
	inputList.push(line);
}).on("close", () => {
	console.log(inputList.sort((a, b) => b - a).join("\n"))
});
