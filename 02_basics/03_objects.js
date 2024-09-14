// The const declaration creates an immutable reference to a value. It does not mean the value it holds is immutable — just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.
// that's why arr,obj,func are declared using const 

//singleton
//Object.create()

const newUser={}
// console.log(newUser);
newUser.location="new delhi"
// console.log(newUser);

const anotherUser={
    name: "cudie",
    type: "baby",
    age: 20,
    isHungry:false,
    "a message": "i'm sleepy",
    myDays: ["sun","sat"]
}
// console.log(anotherUser);
// console.log(anotherUser.name);
// console.log(anotherUser.a message); //error
// console.log(anotherUser["a message"]);
//add a property with key of type symbol
const newkey= Symbol("k1")
// console.log(newkey);

const upcomingUser1={
    newkey: "im the key" //as string key
}
// console.log(upcomingUser1)

const upcomingUser2={
    [newkey]: "im the key" //as symbol key
}
// console.log(upcomingUser2)

const emp1={
    id: 7865,
    name: "stuart"
}
// console.log(emp1)
emp1.greeting=function(){
    console.log('Hello everyone')
}
// console.log(emp1)
// console.log(emp1.greeting)
// console.log(emp1.greeting())

emp1.introduce=function(){
    console.log(`I Mr.${this.name} will host today's event`)
}
// emp1.introduce();
// Object.freeze(emp1); 
emp1.name="changed name"
// console.log(emp1)
