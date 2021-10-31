/*
<div id="todo">
       <form id="todo-form">
            <input type="text" placeholder="할일" required>
        </form>
        <ul id="todo-list"></ul>
</div>
*/

const toDoForm=document.getElementById("todo-form");
const toDoList=document.getElementById("todo-list");
const todoInput=toDoForm.querySelector("input");
let toDos=[];
const TODOS_KEY="toDos";

function paintTodo(newTodo){
    const li1=document.createElement("li");
    li1.id=newTodo.id;
    const span1=document.createElement("span");
    
    span1.innerText=newTodo.text;
    const button1=document.createElement("button");
    button1.innerText="❌";
    button1.addEventListener("click",deleteToDo);
    li1.appendChild(span1);
    li1.appendChild(button1);
     toDoList.appendChild(li1);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    todoInput.value="";
    
    const newTodoObj={
        text:newTodo,
        id:Date.now()
    };
    
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

function deleteToDo(event){
    const li2=event.target.parentElement;
    li2.remove();
    toDos=toDos.filter((toDo)=>toDo.id !== parseInt(li2.id));
    
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function sayHello(item){
    console.log("this is the turn of",item);
}

const savedToDos=localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
   console.log(parsedToDos); 
   toDos=parsedToDos; 
    parsedToDos.forEach(paintTodo);
}
