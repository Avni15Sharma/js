
    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

     // attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // the third arguement in addEventListener is phase: bubbling phase or capture phase
    // by default it is false i.e. bubbling phase ex:- if an image which is a li in a ul is clicked then event will propagate from li to ul i.e bottom to top in the dom Tree
    // in capture phase , the propagation occurs from top to bottom i.e. from parent to child when event occurs at child.
    // this is the manner in which event listeners will be called.

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false) //try with true/false and see the difference

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation() //we can even stop this propagation
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault(); //preventing default behaviour like redirecting link to google
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)

    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }  
    })    
    // removeIt.parentNode.removeChild(removeIt)
    // document.getElementById("owl").addEventListener("click",function(e){
    //     console.log(e.type)
    //         console.log(e.timestamp)
                // console.log(e.preventDefault)
    //     console.log(e.target) 
    //         console.log(e.toElement)
    //             console.log(e.srcElement)
    //                 console.log(e.currentTarget)
    //     console.log(e.clientX)
    //         console.log(e.clientY)
    //             console.log(e.screenX)
    //                 console.log(e.screenY)
    //     console.log(e.altkey)
    //         console.log(e.ctrlkey)
    //             console.log(e.shiftkey)
    //                 console.log(e.keyCode)
    // },false)
