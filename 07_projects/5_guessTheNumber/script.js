let min=1
let max=100
let ans=Math.round(Math.random()*(max-min)+min)
let remGuesses=10
const newGame=document.querySelector(".resultParas")
const message=document.querySelector(".lowOrHigh")
const guess=document.getElementById("guessField")
const submit=document.getElementById("subt")

const prevGuesses=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
remaining.innerHTML=`${remGuesses}`

let arrGuesses
submit.addEventListener("click",function(e){
    e.preventDefault()
    if(canPlay(remGuesses)){
        validateGuess(guess.value)
    }else{
        startGame()
    }  

})

function validateGuess(num){
    if(num=='' || isNaN(num)){
        message.innerHTML="enter a valid number"
    }else if(num<1){
        message.innerHTML="enter a num more than 1"
    }else if(num>100){
        message.innerHTML="enter a num less than 100"
    }else{
        prevGuesses.innerHTML+=`${num} `
        remGuesses--;
        remaining.innerHTML=`${remGuesses}`
        checkGuess(num)
    }
}

function checkGuess(num){
    if(num<ans){
        message.innerHTML="num is too low"
    }else if(num>ans){
        message.innerHTML="num is too high"
    }else{
        message.innerHTML="correct. You Won!"
        startGame()
    }
}

function startGame(){
    remGuesses=10
    ans=Math.round(Math.random()*(max-min)+min)
    submit.setAttribute("disabled",false)
    const startButton= document.createElement("button")
    startButton.innerHTML="New Game"
    startButton.style.backgroundColor= "#4B91F7"
    startButton.style.color="black"
    newGame.appendChild(startButton)
}
function endGame(){
    prevGuesses.innerHTML=``
    remGuesses=-1
    submit.style.backgroundColor="white"
    submit.setAttribute("disabled",true)
}
function canPlay(remGuesses){
    if(remGuesses<1){
        return false
    }return true
}
