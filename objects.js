let person = {
    "name": "Kartik",
    age: 24,
    0: "hello"
};

// console.log(person["name"]);

// console.log(person.age);

// console.log(person[0]); // jab numerical key ho toh square brackets use karna hai not .(dot)  property

// console.log(person);

//******************Creating methods using prototype***************Interesting****

//Prototype is interesing

// String.prototype.len = function() {
//     console.log(this.length);
// }

// let name = "Kartik";
// name.len();

// //Creating array properties using prototype

// Array.prototype.name = "Kartik";
// let arr = [1, 2, 3, 4];
// console.log(arr.name);

// //nested objects

// let obj = {
//     obj2 : {
//         "hello": "1"
//     }
// }

// console.log(obj.obj2.hello);

//accessing objects

// let obj = {
//     "hello1" : 1,
//     "hello2" : 2
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// for (let i = 0; i < Object.keys(obj).length; i++) {
//     console.log(obj[Object.keys(obj)[i]]);
// }

let obj = {
    obj1 : {
        obj1a : {
            
        }
    },
    obj2 : {
        obj2a : {

        },
        obj2b : {

        }
    }
}

//normal method

// for (let key in obj) {
//     console.log(key);
//     if (typeof(obj[key]) == "object") {
//         for (let key2 in obj[key]) {
//             console.log(key2);
//         }
//     }
// }

//recursive method 

// function printKeys(obj) {
//     for (let key in obj) {
//         console.log(key);
//         if (typeof(obj[key]) == "object") {
//             printKeys(obj[key]);
//         }
//     }
// }
// printKeys(obj);

//Creating Array to Object

// let obj = {
//     obj1 : {
//         "hello1" : 1
//     },
//     obj2 : {
//         obj2a : {
//             obj2b : {
//                 "hello2" : 2
//             },
//             obj2ba
//         }
//     }
// };

// function convertInArray(obj) {
//     let ansArr = 
// }

