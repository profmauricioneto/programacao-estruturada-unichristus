const cursos = [
  { nome: "Algoritmos", alunos: 35 },
  { nome: "Programação Web", alunos: 42 },
  { nome: "Banco de Dados", alunos: 28 },
  { nome: "Estrutura de Dados", alunos: 31 },
  { nome: "Engenharia de Software", alunos: 24 },
];

let contadorAlunos = 0;
cursos.forEach(function (curso) {
  console.log(`Curso: ${curso.nome} | Quantidade Alunos: ${curso.alunos}`);
  contadorAlunos += curso.alunos;
});
console.log(`Quantidade total de aluns: ${contadorAlunos}`);

let idades = [33, 53, 11, 23, 14, 15];
let adultos = idades.filter(function (idade) {
  return idade >= 18;
});
console.log(adultos);
console.log(idades);
