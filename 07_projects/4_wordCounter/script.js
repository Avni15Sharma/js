const letter = document.querySelector('.letters');
const word = document.querySelector('.words');
const text = document.querySelector('#typed');
let letterCount = 0;
let wordCount = 1;
text.addEventListener('input', function (e) {
  e.preventDefault();
  typed=text.value;
  letterCount = typed.length;
  letter.innerText = `${letterCount}`;
  wordCount=1;
    for(let i=0;i<letterCount;i++){
        console.log(typed[i])
        if(typed[i]===" "){
            wordCount+=1;
        }
    }
  word.innerText = `${wordCount}`;
});
