const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")
text= document.querySelector(".heading1")
const min=0;
const max=3;
function getNum(){
    const num=Math.round(Math.random()*(max-min)+min)
    return num
}
arr=["grey","white","lightcoral","lightblue"]
buttons.forEach(function (button){
    button.addEventListener("click",function (e){
        body.style.backgroundColor=e.target.id;
        let indToBeExcluded=-1;
        switch(button.id){
            case "grey":
                indToBeExcluded=0
                break;
            case "white":
                indToBeExcluded=1
                break;
            case "lightcoral":
                indToBeExcluded=2
                break;
            case "lightblue":
                indToBeExcluded=3
                break;
            default:
                "invalid choice"
                break;
        }
        let ind=getNum()
        while(ind==indToBeExcluded){
            ind=getNum()
        }
        console.log(arr[ind])
        text.style.color=`${arr[ind]}`
    });
})