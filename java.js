const myObject = {};
Object.defineProperty(myObject, "PI", {
  value: 3.14,
  writable: false,
  configurable: false,
});

function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value;

  if (todoText.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = todoText;

    li.addEventListener("click", function () {
      this.classList.toggle("completed");
    });

    document.getElementById("todoList").appendChild(li);

    input.value = "";
  }
}

document.getElementById("addTodoButton").addEventListener("click", addTodo);
