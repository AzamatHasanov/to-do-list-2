let todo = document.getElementById("todo-input");
let add = document.getElementById("add-btn");
let list = document.getElementById("todo-list");

function addToDo() {
  const todoValues = todo.value.trim();
  if (todoValues === "") return alert("inputu doldurun");

  const li = document.createElement("li");
  li.innerHTML = `<div class="mainflx">
  <li>${todoValues}</li>
    <span class="delete">✖</span></div>`;
  li.addEventListener("click", function () {
    this.classList.toggle("completed");
  });
// news
  li.querySelector(".delete").addEventListener("click", function (e) {
    e.stopPropagation(); 
    li.remove();
  });
  list.appendChild(li);
  todo.value = "";
}
add.addEventListener("click", addToDo);

// new

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTodo();
  });