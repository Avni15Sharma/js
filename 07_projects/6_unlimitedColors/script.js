// color: rrggbb
// hex:0123456789ABCDEF
//generate random color
function getRandomColor(){
    const range="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        let ind=Math.floor(Math.random()*(15-0)+0)
        color+=range[ind]
    }
    return color
}
// newColor=getRandomColor()
// console.log(newColor)

const changeColor=function(){
    document.querySelector("body").style.backgroundColor=getRandomColor()
}

let changeId;

const startChange=function(){
    if(!changeId){
        changeId=setInterval(changeColor,1000)
    }
}

const stopChange=function(){
    clearInterval(changeId)
    changeId=null
}

document.getElementById("start").addEventListener("click",startChange)
document.getElementById("stop").addEventListener("click",stopChange)