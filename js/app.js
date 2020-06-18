
const pushing = document.getElementById('pushing');
const submitPush = document.getElementById('submitPush');
const submitPop = document.getElementById('submitPop');
const submitDisplay = document.getElementById('submitDisplay');
const pushmsg = document.getElementById('pushmsg');
const popmsg = document.getElementById('popmsg');
const show = document.getElementById('show');

//Global Variables
var top = 0;
var size = 5;
var stack = [];
// Push
submitPush.addEventListener('click', (e)=>{{
    let val = pushing.value;
    stackPush(val);
}});
//Pop
submitPop.addEventListener('click', (e)=>{{
    stackPop();
}});

//Display
submitDisplay.addEventListener('click', (e)=>{{
    stackDisplay();
}});

function stackPush(number){
    
    if ( localStorage.getItem('myStack')=== null){
        stack.push(number);
        localStorage.setItem('myStack', JSON.stringify(stack)); 

    }else{
        let getting = JSON.parse(localStorage.getItem('myStack'));
        if (getting.length >= 5){
            pushErrorMsg("Oops! Stack is Full");
            return -1;
        }
        getting.push(number);
        localStorage.setItem('myStack', JSON.stringify(getting));
        pushSuccessMsg();
    }
}
function stackPop(){
    if ( JSON.parse(localStorage.getItem('myStack')).length === 0){
        popErrorMsg("Oops! the Stack is empty!");
        return -1;
    }

    
    let getting = JSON.parse(localStorage.getItem('myStack'));
    let returnString = getting.pop();
    localStorage.setItem("myStack", JSON.stringify(getting));
    popSuccessMsg(returnString);

}
function stackDisplay(){
   
    if (( JSON.parse(localStorage.getItem('myStack')).length === 0)){
        show.innerHTML = "The items in the stack is empty."
        show.style.backgroundColor = "purple";
    }
    let getting = JSON.parse(localStorage.getItem('myStack'));
    show.innerHTML = "Your items in the stack are: <br>" + getting;
    show.style.backgroundColor = "lightgreen";
    show.style.color ="black";
}





// Messages

function pushErrorMsg(msg){
    let el = document.createElement('p');
    el.innerHTML = msg;
    el.style.backgroundColor = "red";
    pushing.parentElement.appendChild(el);
    setTimeout(()=>{
        el.remove();
    }, 3000);
}
function pushSuccessMsg(){
    let el = document.createElement('p');
    el.innerHTML = "Item Successfully Pushed";
    el.style.backgroundColor = "green";
    pushing.parentElement.appendChild(el);
    setTimeout(()=>{
        el.remove();
    }, 3000);
}
function popErrorMsg(msg){
    let el = document.createElement('p');
    el.innerHTML = msg;
    el.style.backgroundColor = "red";
    popmsg.parentElement.appendChild(el);
    setTimeout(()=>{
        el.remove();
    }, 3000);
    
}
function popSuccessMsg(getString){
    let el = document.createElement('p');
    el.innerHTML = "Item Successfully Popped! Item is " + getString;
    el.style.backgroundColor = "green";
    popmsg.parentElement.appendChild(el);
    setTimeout(()=>{
        el.remove();
    }, 3000);
}
