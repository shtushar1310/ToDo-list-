const inputBox=document.querySelector('#inputBox');
const addButton=document.querySelector('#addBtn')
const unorderList=document.querySelector('.todoList')

let editBtnToDO=null;

const addFunction=()=>{
    let inputValue=inputBox.value;
    if(inputValue===""){
        alert('write somethings on To-Do-input')
        return false;
    }

    if(addButton.value==='EDIT'){
        editBtnToDO.target.previousElementSibling.innerHTML=inputValue
        addButton.value='Add'
        inputBox.value=''
    }
    else{
    
        const addList=document.createElement('li')
        const addPara=document.createElement('p')

        addPara.innerText=inputValue;

       unorderList.appendChild(addList)
        addList.appendChild(addPara)

        // creating the editBtn

        const createEditBtn=document.createElement('button')
        createEditBtn.innerHTML='EDIT';
        createEditBtn.classList.add('btn','editBtn')

        addList.appendChild(createEditBtn)
       
        // creating the deleteBtn
         const createDeleteBtn=document.createElement('button')
         createDeleteBtn.innerHTML='DELETE'
         createDeleteBtn.classList.add('btn','deleteBtn')
        //  console.log(createDeleteBtn)
         addList.appendChild(createDeleteBtn) 

        //completion of task
        const complicationTask=document.createElement('button')
        complicationTask.innerHTML='COMPLETED'
        complicationTask.classList.add('btn',)
        addList.appendChild(complicationTask)

        
    inputBox.value=''
    saveLocalToDO(inputValue)
}
}

const updateToDo=(e)=>{

//    console.log(e.target)
if(e.target.innerHTML==='DELETE'){
   unorderList.removeChild(e.target.parentElement) 
}
if(e.target.innerHTML==='EDIT'){
    inputBox.value = e.target.previousElementSibling.innerHTML;
     
    inputBox.focus()
    addButton.value='EDIT'
    editBtnToDO=e
    // console.log(e)
}
if(e.target.innerHTML='COMPLETED'){
    e.target.parentElement.innerHTML='COMPLETED'
    inputBox.focus()
}
  
}


const saveLocalToDO=(todo)=>{
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));



    
// console.log(localStorage.setItem('todos',JSON.stringify(todos)));
// console.log(JSON.parse(localStorage.getItem('todos')));


}
addButton.addEventListener( 'click',()=>{
    addFunction()
})
unorderList.addEventListener('click', updateToDo)

