function contarDisciplinas() {
  let totalDisciplinas = document.getElementsByTagName("li").length;

  document.getElementById("contador-resultado").style.display = "Block";
  document.getElementById("contador-resultado").textContent =
    `Total de Disciplinas ${totalDisciplinas}`;
}

function destacarDisciplinas() {
  let disciplinas = document.getElementsByTagName("li");
  for (let i = 0; i < disciplinas.length; i++) {
    disciplinas[i].style.backgroundColor = "#16a34a";
    disciplinas[i].style.color = "#fff";
  }
}

function removerDestaqueDisciplinas() {
  let disciplinas = document.getElementsByTagName("li");
  for (let i = 0; i < disciplinas.length; i++) {
    disciplinas[i].style.backgroundColor = "#dbeafe";
    disciplinas[i].style.color = "#000";
  }
}
