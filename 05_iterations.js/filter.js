// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
//   console.log(userBooks);

// let's try on my own
countries=["US","Mexico","Japan","Ireland"]
// let values=countries.forEach((item)=>(item+10))
// let values=countries.forEach((item)=>{ return item+10})
// console.log(values)
//for each loop does not return anything 

//filter
let val=countries.filter((item)=>item==="Mexico")
// console.log(val)
nums=[2,3,4,5,6,7,7,9,1]
// let greaternums=nums.filter(function getgreater(item){
//      item>5
// })
// let greaternums=nums.filter(function (item){
//     return item>5
// })
// let greaternums=nums.filter((item)=>{
//     return item>5
// })
// let greaternums=nums.filter((item)=>(item>5))
let greaternums=nums.filter((item)=>item>5)
// console.log(greaternums)
//so filter applies the passed function on each element of the arr and returns an array of the elements that satisfy that condition

//how we can do the same thing using for each:
// but prefer filter
greater=[]
nums.forEach((item)=>{
    if(item>5){
        greater.push(item)
    }
})
// console.log("greater: ",greater)

orders=[
    {
        item:"shirt",
        price:799,
        paymentstatus:"successful"
    },
    {
        item:"skirt",
        price:699,
        paymentstatus:"failed"
    },
    {
        item:"suit",
        price:1299,
        paymentstatus:"pending"
    },
    {
        item:"wallet",
        price:199,
        paymentstatus:"successful"
    }
]
let tobeshipped=orders.filter((item)=>(item.paymentstatus==="successful"))
console.log(tobeshipped)
