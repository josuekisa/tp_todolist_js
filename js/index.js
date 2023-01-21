const input = document.getElementById('Todo');
const button=document.getElementById('Input');
const ul=document.getElementById('todo-list');
const todo=[];

function addTodo(task)
{
  
  todo.push(input.value);
  const item = document.createElement("li");
  item.innerHTML = input.value;
  const buttonDel = document.createElement("button");
  const text = document.createTextNode("Supprimer");
  buttonDel.appendChild(text);
  item.appendChild(buttonDel);
  ul.appendChild(item);
  console.log("error");
}
function deleteTodo(task)
{
  todo.splice(ul.value)
 
}
/*input.addEventListener('click',);*/

/*button.addEventListener('click',(e) => {
  e.preventDefault();
  addTodo()
}); */