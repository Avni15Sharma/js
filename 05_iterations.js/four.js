const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

//let's do it my way
// for of loop jis bhi iterable pe lgate hain uske elements de deta hai  (map,string,arr)
// for of objects pe nhi lg paata
// for in loop keys deta hai us se value khud nikal skte hain
// for in object pe work krleta hai (map,arr pe bhi)

// userarr=["tom","hannah","rene"]
// for(const key in userarr){
//     console.log(`${key}th user: ${userarr[key]}`)
// }

maze={
    rows:78,
    dimensions:3,
    color:"blue",
    position:"centric"
}
// for(const attribute in maze){
//     console.log(`value of ${attribute} : ${maze[attribute]}`)
// }

mapOfIndia=new Map()
mapOfIndia.set("states",28)
mapOfIndia.set("union territories",8)

// for(const key in mapOfIndia){
//     console.log(`there are ${mapOfIndia[key]} ${key}`)
// } //mere khyal se map pe work ni krta for in loop