const fs = require("fs");

console.log(fs.readFileSync("a.txt", "utf-8"));

console.log(fs.existsSync("a.txt"));

console.log(fs.existsSync("b.txt"));

fs.writeFileSync("a.txt", "how are you?"); //first it will delete the all data and write the line

fs.writeFileSync("b.txt", "Something Test");

console.log(process.argv); // passing arguments in command line

let file1name = process.argv[2];
let file2name = process.argv[4];

let file1data = 