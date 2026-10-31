const linguagens = ["C", "Java"];

// comportamento de fila
linguagens.push("javascript");
console.log(linguagens);
linguagens.shift();
console.log(linguagens);

// comportamento de pilha
linguagens.push("Python");
console.log(linguagens.pop());

let alunos = ["joao", "pedro", "rafael", "miguel", "zacarias"];
// for (let i = 0; i < alunos.length; i++) {
//   console.log(alunos[i]);
// }

// for (let nome of alunos) {
//   console.log(nome);
// }

alunos.forEach(function (aluno) {
  console.log("Nome aluno: " + aluno);
});
