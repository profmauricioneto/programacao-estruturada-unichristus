let idValue = 0;

let btnAdicionarAluno = document.getElementById("btn-add-aluno");
btnAdicionarAluno.addEventListener("click", () => {
  adicionarAluno();
});

function adicionarAluno() {
  // pegar os dados fornecidos pelas entradas
  nomeAluno = document.getElementById("input-nome").value;
  matriculaAluno = document.getElementById("input-matricula").value;
  statusAluno = document.getElementById("input-status").value;
  if (!nomeAluno || !matriculaAluno) {
    window.alert("Campos obrigatórios vazios!");
    return;
  }
  let tbody = document.querySelector("tbody");
  let linha = document.createElement("tr");

  // campos a serem inseridos na linha
  let id = document.createElement("td");
  id.innerHTML = ++idValue;
  let nome = document.createElement("td");
  nome.innerHTML = nomeAluno;
  let matricula = document.createElement("td");
  matricula.innerHTML = matriculaAluno;
  let status = document.createElement("td");
  status.innerHTML = statusAluno;
  let acao = document.createElement("td");
  acao.innerHTML = `Matriculado!`;

  // adicionando elementos na linha
  linha.appendChild(id);
  linha.appendChild(nome);
  linha.appendChild(matricula);
  linha.appendChild(status);
  linha.appendChild(acao);
  // adicionando a linha na tabela
  tbody.appendChild(linha);

  // atualizar quantidade de alunos matriculados
  let quantidade = document.getElementById("total-alunos");
  quantidade.textContent = `Total: ${idValue} aluno(s)`;

  // limpar campos após inserção dos dados
  document.getElementById("input-nome").value = "";
  document.getElementById("input-matricula").value = "";
}

function limparTabela() {
  let linhas = document.querySelectorAll("tbody tr");
  // console.log(linhas);
  for (let l of linhas) {
    l.remove();
  }
}
