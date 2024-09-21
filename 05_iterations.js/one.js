// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
//let's do it my way
//for loop
// for(let i=0;i<10;i++){
//     if(i==6){
//         continue
//     }
//     console.log(`Hi i'm ${i}`)
// }
// for(let i=0;i<10;i++){
//     if(i==5){
//         console.log("you've got me",i)
//     }else{
//         console.log(i)
//     }
// }
// arr=["today","is","sunday"]
// for(let i=0;i<arr.length;i++){
//     if(i==1){
//         break
//     }
//     console.log(`the ${i}th element is: ${arr[i]}`)
// }
// for(let i=2;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         if(j==10){
//             console.log(`${i} * ${j} = ${i*j}`)
//         }else{
//             console.log(`${i} * ${j}  = ${i*j}`)
//         }
//     }
//     console.log("-------------------------")
// }