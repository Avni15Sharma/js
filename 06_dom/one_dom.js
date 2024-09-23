// use this on one.getHTML
const greyitem=document.getElementById("one")
greyitem.style.padding="10px"
greyitem.style.backgroundColor="lime"
greyitem.style.color="black"
greyitem.style.width="100px"
greyitem.style.borderRadius="15px"

const goldenitem=document.getElementById("two")
goldenitem.style.color="golden"
goldenitem.style.color="green"
goldenitem.style.color="gold"
goldenitem.innerText="gold"

//innertext is the text of the element which is displayed
//textcontent is the entire text in element whether it is hidden or not by our css

const greenitem=document.getElementById("three")
greenitem.style.fontSize="45px"

const div=document.getElementsByClassName("div")
//html collection is not array
const toArr=Array.from(div)
toArr
const divElement=toArr[0]
divElement.style.color="aquamarine"

document.querySelector(".bg-black") //gives first match
const firstItem=document.querySelector(".item")
firstItem.innerHTML="<h1>bye</h1>"
//innerHTML allows html tags

const items=document.querySelectorAll(".item")
items
items[0].style.backgroundColor="lavender"
items.forEach((elm)=>elm.style.backgroundColor="grey")

//nodelist which is diff from array ,allows forEach loop
secondItem=document.querySelectorAll(".item")[2]
// secondItem.innerHTML
// secondItem.textContent
// secondItem.innerText

secondItem.id
secondItem.class
secondItem.className
secondItem.getAttribute("id")
secondItem.getAttribute("class")

const h2=document.getElementById("h2")
h2
h2.getAttribute("id")
h2.setAttribute("class","new")
h2.setAttribute("class","new2") //overrides the previous class value
h2.setAttribute("class","new new2") //now both classes are set
h2

document.querySelector("li")
