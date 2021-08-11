//1st Question

function frames(minutes, fps) {
    return minutes*60*fps;
}

console.log(frames(10, 25));

//2nd Question

let sum = 0;
function addup(value) {
    for (let i = 1; i <= value; i++) {
        sum += i;
    }
    return sum;
}

console.log(addup(600));

//4th Question

function tuckIn(arr1, arr2) {
    arr2.push(arr1[1]);
    arr2.unshift(arr1[0]);
    return arr2;
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

//5th Question

let count = 0;
function countTrue(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == true) {
            count += 1;
        }
    }
    return count;
}

console.log(countTrue([true, false, false, true, false]));

//6th Question

let arr = [];
function arrayOfMultiples(num, length) {
    for (let i = 1; i < num; i++) {
        arr.push(num * i);
    }
    return arr;
}

console.log(arrayOfMultiples(12, 10));