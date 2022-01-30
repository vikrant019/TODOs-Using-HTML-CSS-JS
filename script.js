const formToDo=document.querySelector(".form-todo");
const input=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");

formToDo.addEventListener("submit",(e)=>{
    e.preventDefault();
    const litext=input.value;
    
    const newLi=document.createElement("li");
    const innerhtml=`<span class="text">${litext}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML=innerhtml;
    input.value="";
    todoList.append(newLi);
});

todoList.addEventListener("click",(e)=>{
    
   
 
    if(e.target.classList.contains("done")){
        const lispan=e.target.parentNode.previousElementSibling;
        
        lispan.style.textDecoration="line-through";
    }
    if(e.target.classList.contains("remove")){
        const liparent=e.target.parentNode.parentNode;
        liparent.remove();
       
    }
})