// Um professor precisa analisar notas dos alunos. Implemente um programa em JS que:
// Armazene 8 notas em um array
// Percorra o array e:
// Calcule a média
// Conte quantos alunos foram aprovados (nota ≥ 7)

const alunos = [
  { nome: "fulaninho", nota: 7.8 },
  { nome: "cicraninho", nota: 8 },
  { nome: "joãozinho", nota: 4.3 },
  { nome: "zezinho", nota: 5.7 },
  { nome: "washington", nota: 2.6 },
  { nome: "franciscleiton", nota: 10 },
  { nome: "josicleia", nota: 9 },
  { nome: "raimundinho", nota: 5.6 },
];

let somatorioNotas = alunos.reduce(function (acc, aluno) {
  return acc + aluno.nota;
}, 0);
let media = somatorioNotas / alunos.length;
console.log(`Media da turma: ${media.toFixed(2)}`);

let aprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 7;
});
console.log(`Quantidade de alunos aprovados: ${aprovados.length}`);
