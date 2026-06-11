function adicionarTodo() {
  let todo = document.getElementById("todo-input").value;
  let lista = document.querySelector("ul");
  let item = document.createElement("li");

  item.textContent = todo;
  lista.appendChild(item);
  document.getElementById("todo-input").value = "";
}
document.getElementById("btn-adicionar").onclick = () => {
  adicionarTodo();
};

// document.getElementById("btn-adicionar").addEventListener("click", () => {
//   adicionarTodo();
// });
