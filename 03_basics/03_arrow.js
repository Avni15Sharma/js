const user = {
    username: "stuarty",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "stuarty"
//     console.log(this.username); //does not work here
//     console.log(this) //global object
// }

// chai()

// const chai = function () {
//     let username = "stuarty"
//     console.log(this.username); //does not work here
//     console.log(this) //global object
// }

// const chai =  () => {
//     let username = "stuarty"
//     console.log(this); //empty obj
// }


// chai()

//browser me this -> window 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "stuarty"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function(){we'll see this later})