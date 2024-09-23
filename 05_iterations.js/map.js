const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNums);

//let me try
//map
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
// let discount=orders.map((item)=>{
//     if(item.item==="skirt")
//         item.price-=100
//     return item
// })
let change=orders.filter((item)=>(item.price>500)).map((item)=>(item.price+=1000))
console.log(change)
//map applies the passed function on each element of the arr and returns an arr of result