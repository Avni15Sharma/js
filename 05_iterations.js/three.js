// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
//let's do it my way
// arr=[3,6,2,4,1]
// for(const num of arr){
//     console.log(num)
// }
// user={
//     id:8765,
//     name:"tim gradle"
// }
// for(const entry of user){
//     console.log(entry) //does not work bcoz obj is not iterable
// }
// location="los angeles"
// for(const ch of location){
//     console.log(ch)
// }
// const mapOfLetters= new Map()
// mapOfLetters.set("h",0)
// mapOfLetters.set("t",4)
// mapOfLetters.set("u",1)
// mapOfLetters.set("s",2)
// mapOfLetters.set("a",9)
// console.log(mapOfLetters)
// for(const entry of mapOfLetters){
//     console.log(entry)
// }
// for(const [letter,freq] of mapOfLetters){ //destructre
//     console.log(`freq of ${letter}: ${freq}`)
// }
// for(const [letter,freq] of user){ 
//     console.log(`value of ${letter}: ${freq}`)
// }//obj is not iterable
// newarr=[1,2,3,4,6]
// for(const [key,value] of newarr){ //does not work
//     console.log(key,value)
// }
