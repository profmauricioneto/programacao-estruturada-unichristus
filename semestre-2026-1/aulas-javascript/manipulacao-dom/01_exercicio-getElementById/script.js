function atualizarTurma() {
  // pegar informação do input de turma
  let novaTurma = document.getElementById("input-turma").value;
  // verificar se o input esta vazio
  if (novaTurma === "") {
    window.alert("Insira nova informação da turma");
    return;
  }
  // atualizar o código da turma
  document.getElementById("codigo-turma").textContent = novaTurma;
}

function atualizarSemestre() {
  let novoSemestre = document.getElementById("input-semestre").value;
  if (novoSemestre === "") {
    window.alert("Insira nova informação de semestre");
    return;
  }
  document.getElementById("semestre-info").textContent = novoSemestre;
}

function atualizarProfessor() {
  let novoProfessor = document.getElementById("input-professor").value;
  if (novoProfessor === "") {
    window.alert("Insira nova informação de professor");
    return;
  }
  document.getElementById("nome-professor").textContent = novoProfessor;
}

function atualizarDisciplina() {
  let novaDisciplina = document.getElementById("input-disciplina").value;
  if (novaDisciplina === "") {
    window.alert("Insira nova informação de disciplina");
    return;
  }
  document.getElementById("nome-disciplina").textContent = novaDisciplina;
}
