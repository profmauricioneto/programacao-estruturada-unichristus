function adicionarPresenca() {
  let nomeAluno = document.querySelector("#nome-aluno").value;
  if (!nomeAluno) {
    alert("Campo do nome do aluno vazio! Preencha o campo corretamente!");
    return;
  }

  let ol = document.getElementById("lista-presenca");
  let li = document.createElement("li");
  li.innerHTML = `${nomeAluno.toUpperCase()} - Presença`;
  ol.appendChild(li);
}
