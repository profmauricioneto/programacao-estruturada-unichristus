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
  let manhas = document.querySelectorAll(`[data-periodo="${turno}"]`);
  for (let i = 0; i < manhas.length; i++) {
    manhas[i].classList.toggle("selecionada");
  }
}
