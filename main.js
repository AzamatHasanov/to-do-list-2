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

  list.appendChild(li);
  todo.value = "";
}
add.addEventListener("click", addToDo);

