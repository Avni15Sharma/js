// Dates

let myDate = new Date()
// console.log(`toString(): ${myDate.toString()}`);
// console.log(`toDateString(): ${myDate.toDateString()}`);
// console.log(`toLocaleString(): ${myDate.toLocaleString()}`);
// console.log(`toISOString(): ${myDate.toISOString()}`);
// console.log(`toJSON(): ${myDate.toJSON()}`);
// console.log(`toLocaleDateString(): ${myDate.toLocaleDateString()}`);
// console.log(`toLocaleTimeString(): ${myDate.toLocaleTimeString()}`);
// console.log(`toTimeString(): ${myDate.toTimeString()}`);
// console.log(`toUTCString(): ${myDate.toUTCString()}`);

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
console.log(newDate);