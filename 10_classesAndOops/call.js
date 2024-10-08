function setUsername(username){
    this.username=username
    console.log("called")
}
function createUser(username,email,password){
    // this.setUsername(username) //does not work
    // setUsername(username) //func is called but username is not set
    setUsername.call(this,username) //current execution context is passed on to this func
    this.email=email
    this.password=password
}

const awnee=new createUser("avni","avni@1243","ytre")
console.log(awnee)