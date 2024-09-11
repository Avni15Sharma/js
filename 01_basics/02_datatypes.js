"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

// console.log(3 
//     +
//      3) // code readability should be high so avoid this

// console.log(3 + 3) //this is fine

// console.log("Awwwneee")


let name = "avni"
let age = 21
// let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value not type //ex: we receive a response from api, receiving null means we got no response ,bcoz 0 is still some response.
// undefined => one of the data types  
// symbol => unique


// object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object



// be aware!! summary ahead-------
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Data Types: Primitive(call by value) and Non Primitive(call by reference) 
let myName="Avni"
let myAnotherName=myName
// console.log(myName);
// console.log(myAnotherName);

// myAnotherName="AWWWNEEE"
// console.log(myName);
// console.log(myAnotherName);

let userOne={
    email: "abc@123.com",
    id:67 
}
let userTwo=userOne
// console.log(userOne.email);
// console.log(userTwo.email);
userTwo.email="main toh badal gyi"
// console.log(userOne.email);
// console.log(userTwo.email);




