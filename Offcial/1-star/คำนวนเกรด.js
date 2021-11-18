const rl = require("readline").createInterface(process.stdin);
let Input = 0

rl.on("line", (line) => {
	Input = line
}).on("close", () => {
  if (Input >= 80) console.log("A")
  if (Input >= 70 && Input < 80) console.log("B")
  if (Input >= 60 && Input < 70) console.log("C")
  if (Input >= 50 && Input < 60) console.log("D")
  if (Input < 50) console.log("F")
});