var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

buildList();

function buildList(){
for (i=0; i<todos.length;i++){
    var node = document.createElement("li");
    var textnode = document.createTextNode(todos[i]);
    node.appendChild(textnode);
    todoList.appendChild(node);
    }

}

