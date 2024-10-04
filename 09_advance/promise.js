// const promiseOne=new Promise(function(resolve,reject){
        //Do an async task
        // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promiseOne consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },2000)
// }).then(()=>{
//     console.log("Async 2 resolved")
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({user:"naruto",userid:"123"})
//     },1000)    
// })
// promiseThree.then((user)=>{
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=false
//         if(!error){
//             resolve({username:"triveni",userid:987})
//         }else{
//             reject(`ERR:something went wrong`)
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("promise is either resolved or rejected")
// })

// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=false
//         if(!error){
//             resolve({user:"js",pass:123})
//         }else{
//             reject("ERR: oops! something went wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response=await promiseFive
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }
// consumePromiseFive()

async function getAllUsers(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()//this too takes time
        console.log(data);
    }catch(error){
        console.log('Error: ',error);
    }
}
getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log("error: ",error)
})

// promise.all
// yes this is also available, kuch reading aap b kro.