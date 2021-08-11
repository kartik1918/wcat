const fs = require("fs");

console.log(fs.readFileSync("a.txt", "utf-8"));

console.log(fs.existsSync("a.txt"));

console.log(fs.existsSync("b.txt"));

fs.writeFileSync("a.txt", "how are you?"); //first it will delete all the data and then write the line

fs.writeFileSync("b.txt", "Something Test");

console.log(process.argv); // passing arguments in command line

let file1name = process.argv[2];
let file2name = process.argv[4];

let file1data = fs.readFileSync("file1name", "utf-8");
let file2data = fs.readFileSync("file2name", "utf-8");

console.log()