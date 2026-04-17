let pessoa = {};
pessoa.nome = 'Mauricio';
console.log(pessoa);
pessoa.idade = 36;
console.log(pessoa);
pessoa.isProfessor = true;
console.log(pessoa);
pessoa.disciplinas = ['POO', 'PE'];
console.log(pessoa);

for (atrib in pessoa) {
  console.log(`${atrib} = ${pessoa[atrib]}`);
}

console.log(`Olá, meu nome é ${pessoa.nome} tenho ${pessoa.idade} e sou ${pessoa.isProfessor ? 'professor' : 'aluno'}`)