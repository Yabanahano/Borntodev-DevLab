const rl = require("readline").createInterface(process.stdin);
let inputList = []

rl.on("line", (line) => {
	inputList = line.split(" ")
}).on("close", () => {
  console.log(inputList.reverse().join(" "))
});