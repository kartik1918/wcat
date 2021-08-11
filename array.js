// let arr = [1,2,3,4,5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//traverse and get the index
// for (let i in arr) {
//     console.log(i);
// }

//traverse and get the value
// for (let i of arr) {
//     console.log(i);
// }

// console.log("a" + 1 + 2); //String Concatenation

// console.log(1 + 2 + "a"); //first indentation and then string concatenation

// console.log(String.fromCharCode("a".charCodeAt(0) + 1)); //converting 'a' to 'b'

//most of important methods of array

//map method

// let arr = [1, 2, 3, 4];

// let newarr = arr.map(function(value) {
//     return value + 2;
// });

// console.log(newarr);

//splice method -> deleting odd elements in array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let temparr = [...arr] // copying array -> with brackets
// ;
// for (let i = arr.length; i >= 0; i--) {
//     if (arr[i] % 2 == 1) {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// filter method

// arr = arr.filter(function(value) {
//     // if (value % 2 == 1) {
//     //     return false;
//     // } else {
//     //     return true;
//     // }
//     return value % 2 == 0;
// });

// console.log(arr);

//sort method

let arr = [2, 5, 4, 1, 7];

// console.log(arr.sort(function(a, b) {
//     return a - b; //providing compilier that 'a - b' -> a is greater than b
// }));

// console.log(arr.sort(function(a, b) {
//     return b - a; //providing compilier that 'b - a' -> b is greater than a
// }));

// Sorting in ascending array

// console.log(arr.sort(function(a, b) {
//     if (a > b) { // comparator function
//         return 1; //it can also be true instead of 1
//     } else if (a == b) {
//         return 0;
//     } else {
//         return -1;
//     }
// }));

// Sorting in descending array

// console.log(arr.sort(function(a, b) {
//     if (a > b) {
//         return -1; 
//     } else if (a == b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }));

//includes method

console.log(arr.includes(2));

console.log(arr.includes(6));