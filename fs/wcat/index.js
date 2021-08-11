const fs = require("fs");

let arguments = process.argv.slice(2);

let flags = [];
let filenames = [];
let secondaryArguments = [];

for (let i of arguments) {
    if (i[0] == "-") {
        flags.push(i);
    } 
    else if (i[0] == "$") {
        secondaryArguments.push(i.slice(1));
    } else {
        filenames.push(i);
    }
}
// if (flags.length == 0 && filenames.length != 0) {
//     for (file of filenames) {
//         console.log(fs.readFileSync(file, "utf-8"));
//     }
// } else {
//     for (let j of flags) {
//         if (j == "-rs") {
//             for (let file of filenames) {
//             let fileData = fs.readFileSync(file, "utf-8");
//             console.log(fileData.split(" ").join(""));
//             }
//         }
//     }
// }

for (let file of filenames) {
    let fileData = fs.readFileSync(file, "utf-8");
    for (flag of flags) {
        if (flag == "-rs") { // removing spaces from file
            fileData = removeAll(fileData, " ");
        }
        if (flag == "-rn") { // removing new line from file
            fileData = removeAll(fileData, "\r\n");
        }
        if (flag == "-rsc") {
            let temp = " ";
            for (character of fileData) {
                if (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90 || character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
                    temp += character;
                }
            }
            fileData = temp;
        }
    }
    console.log(fileData);
}

function removeAll(string, removaldata) {
    return string.split(removaldata).join("");
}