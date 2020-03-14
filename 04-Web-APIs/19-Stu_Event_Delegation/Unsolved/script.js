var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var people = [{ name: "Bob" }];
var currentId = 0;

// peopleListEl.addEventListener("click", function (event) {

// if (event.target.matches("button")) {
//   var item = document.createElement("div");
//   item.textContent = groceries[event.target.parentElement.id];
//   shoppingCartEl.append(item);
// }
// });

function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  event.preventDefault();
  if (event.target.matches("button")) {
    modalEl.style.display = "block";
    console.log(event);
  }
}

function saveForm(event) {
  event.preventDefault();

}

closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);
peopleListEl.addEventListener('click', handleClick);
saveBtn.addEventListener('click', saveForm);
