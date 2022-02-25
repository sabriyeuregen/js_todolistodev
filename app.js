const todoInput=document.querySelector("#task")
const addButton=document.querySelector("#liveToastBtn")
const todoList=document.querySelector("#list")
const container=document.querySelector(".container")
eventListener()

function eventListener(){//event listener almak için fonk.
  container.addEventListener("onclick",newElement)
  document.addEventListener("DOMContentLoaded",loadAllTodosToUI)
 
}

function loadAllTodosToUI(){
   let todos=getTodosFromStorage()
   todos.forEach(function(todo){
     addTodoToUI(todo)
   })
}

function newElement(e){
    const newTodo=todoInput.value.trim()
    if(newTodo===""){
      $(document).ready(function(){
        $('.toast').toast('show');
      });
    }
    else{
    addTodoToUI(newTodo)
    addTodoToStorage(newTodo)
    
  }
    
}
function getTodosFromStorage(){//storageden tüm todoları al
 let todos
 if(localStorage.getItem("todos")===null){
   todos=[]
 }
 else{
   todos=JSON.parse(localStorage.getItem("todos"))
 }
 return todos
}

function addTodoToStorage(newTodo){
  let todos=getTodosFromStorage()
  todos.push(newTodo)
  localStorage.setItem("todos",JSON.stringify(todos))
}

function addTodoToUI(newTodo){
   const listItem=document.createElement("li")
   listItem.appendChild(document.createTextNode(newTodo))
   todoList.appendChild(listItem)
   todoInput.value=""
}