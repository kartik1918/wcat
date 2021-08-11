// function add(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return "Invalid Arguments";
//     }
//     return parseInt(a) + parseInt(b);
// }

// console.log(add("a", 2));

// let add = function(a, b) {
//     return parseInt(a) + parseInt(b);
// }

// let add = (a, b) => {
//     return parseInt(a) + parseInt(b);
// }

// function print() {
//     //console.log("hello");
//     return "hello";
//     //return undefined; // invisible line in every function
// }

// let print = function() {
//     console.log("hello");
// }

// print();

let arr = [1, 2, 3, 4, 5];

function temp(data) {
    console.log(data);
}

arr.forEach(temp.bind(this, '[1, 5, 6, 8]'));