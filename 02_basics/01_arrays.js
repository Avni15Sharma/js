// array
// arr -> Object
// arr-> reference data type , shallow copy
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("Arr ", myArr);

const myn1 = myArr.slice(1, 3)

console.log("slice: ",myn1);
console.log("Arr after slice is used ", myArr);


const myn2 = myArr.splice(1, 3)

console.log("splice: ",myn2);
console.log("Arr after splice is used ", myArr);