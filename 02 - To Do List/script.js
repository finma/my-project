const btnInput = document.querySelector(".btn-input");
const todoList = document.querySelector(".todo-field .todo-list");

btnInput.addEventListener("click", addTodo);

todoList.addEventListener("click", deteleChecked);

function addTodo(event) {
  event.preventDefault();
  const inputValue = document.querySelector(".input-value");
  const list = document.createElement("div");
  list.classList.add("list");
  if (inputValue.value == "") {
    alert("Masukan list");
  } else {
    list.innerHTML = listItem(inputValue);
    todoList.appendChild(list);
  }

  inputValue.value = "";
}

function deteleChecked(e) {
  const item = e.target;

  if (item.classList[0] === "trash") {
    const todo = item.parentElement.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "check") {
    const todo = item.parentElement.parentElement;
    todo.classList.toggle("checked");
  }
}

function listItem(inputValue) {
  return `<li class="item bg-white p-1 w-3/5">${inputValue.value}</li>
          <button class="focus:outline-none"><i class="check fas fa-check p-3 text-xs cursor-pointer"></i></button>
          <button class="focus:outline-none"><i class="trash fas fa-trash p-3 text-xs cursor-pointer"></i></button>`;
}
