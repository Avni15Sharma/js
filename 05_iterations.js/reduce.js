const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);

//let me try
schedule=[{
    day:"mon",
    hrs:4
},{day:"tue",
    hrs:8
},{
    day:"sun",
    hrs:2
}]
let hrsStudied=schedule.reduce((acc,curr)=>(acc+curr.hrs),0)
// console.log("hours I studied this week: " ,hrsStudied)
let hrsEnjoyed=schedule.reduce((acc,curr)=>{
    console.log(`accumulator: ${acc} and current value: ${curr.hrs}`)
    console.log(`current enjoyed: ${24-curr.hrs} `)
    return acc+(24-curr.hrs)
},2)
console.log("hrsEnjoyed: ",hrsEnjoyed)
//reduce element ki hr ek value pe operate krte hue sath sath accumulator ke sath operate krta hai aur end result/value return krta h