/*
<form class="hidden" id="login-form">
       <input required maxlength="15" type="text" placeholder="What is your name?">
       <button>Log In</button>
</form>
<h1 id="greeting" class="hidden"></h1>
*/

const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}