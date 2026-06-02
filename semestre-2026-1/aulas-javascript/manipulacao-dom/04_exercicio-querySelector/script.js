function atualizarTurma() {
  let novaTurma = document.querySelector("#input-turma").value;
  if (!novaTurma) {
    alert("Campo vazio! Insira uma nova turma!");
    return;
  }
  let campoTurma = document.querySelector("#codigo-turma");
  campoTurma.textContent = novaTurma;
}

function primeiroTurno() {
  let turno = document.querySelector('[data-periodo="manha"] span');
  alert(turno.textContent);
}

function turnos(turno) {
  let turnosEncontrados = document.querySelectorAll(
    `[data-periodo="${turno}"]`,
  );
  for (let i = 0; i < turnosEncontrados.length; i++) {
    turnosEncontrados[i].classList.toggle("selecionada");
  }
}

function limpar() {
  let manhas = document.querySelectorAll(`[data-periodo="manha"]`);
  let tardes = document.querySelectorAll(`[data-periodo="tarde"]`);
  let noites = document.querySelectorAll(`[data-periodo="noite"]`);

  let todosTurnos = [...manhas, ...tardes, ...noites];
  for (let i = 0; i < todosTurnos.length; i++) {
    todosTurnos[i].classList.remove("selecionada");
  }
}
