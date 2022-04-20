const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://google.com//";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı bir sayfaya git"));
cardbody.appendChild(newLink);
console.log(cardbody);
console.log(newLink);

var todos = [];

function addToDo() {
  console.log("clicked");
  var todoElement = document.getElementById("todo");
  var todoText = todoElement.value;
  todo={
      todoText,
      id:makeid(4),
      isDone:false
  }
  todos.push(todo);
  render();
}

function addTodoElement(todo) {
  var list = document.getElementsByClassName("list-group")[0];
  console.log(list);
  const li = document.createElement("li");
  li.className = "list-group-item ";

  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  const icon = document.createElement("i");
  icon.className = "fa fa-remove";
  icon.style="float:right"
  link.onclick = function () {
    todos = todos.filter((x) => x.id != todo.id);
    render();
  };
  
  const checkbox=document.createElement("input");
  checkbox.type="checkbox";
  checkbox.style="margin-right:10px";
  checkbox.checked=todo.isDone;

  checkbox.onchange=function(){
    todo.isDone=checkbox.checked;
    render();
  }

  if(todo.isDone){
    li.style="border-color:green"
  }

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(todo.todoText));

  li.appendChild(link);
  link.appendChild(icon);
  list.appendChild(li);
}

var filterInput = document.getElementById("filter");
filterInput.onchange = render;

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function filter() {
  var filterText = filterInput.value;
  console.log(filterText);
  var filtered = todos.filter((x) => x.todoText.includes(filterText));
  return filtered;
}

function render() {
  clearList();
  var filtered = filter();
  for (const todo of filtered) {
    addTodoElement(todo);
  }
}

function clearList() {
  var ul = document.getElementsByClassName("list-group")[0];
  ul.innerHTML = "";
}
var deleteButton = document.getElementById("clear-todos");
deleteButton.onclick = function () {
  clearList();
  todos = [];
};
