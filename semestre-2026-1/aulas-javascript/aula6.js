function adicionar(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(adicionar(1));
console.log(adicionar(1, 2));
console.log(adicionar(1, 2, 3));
console.log(adicionar(1, 2, 3, 4));
console.log(adicionar(1, 2, 3, 4, 5));
console.log(adicionar(1, 2, 3, 4, 5, 6));

let pessoa = {
  nome: "mauricio",
  profissao: "professor",
  idade: 35,
  ativo: true,
  disciplinas: ["poo", "pe", "algoritmos"],
};
console.log(pessoa);
console.log(typeof pessoa);

let pessoaJSON = JSON.stringify(pessoa);
console.log(pessoaJSON);
console.log(typeof pessoaJSON);

let pessoaObjeto = JSON.parse(pessoaJSON);
console.log(pessoaObjeto);
console.log(typeof pessoaObjeto);

let schedule = `{
"meetups": [
{ "title": "Conference 1", "date": "2017-11-30T12:00:00.000Z" },
{ "title": "Conference 2", "date": "2017-04-18T12:00:00.000Z" }
]
}`;

let agenda = JSON.parse(schedule, (key, value) => {
  if (key === "date") return new Date(value);
  return value;
});

console.log(
  agenda.meetups[0].date.getDay() +
    "/" +
    agenda.meetups[0].date.getMonth() +
    "/" +
    agenda.meetups[0].date.getFullYear(),
);

// agenda.forEach((item) => {
//   console.log(`${item.date.getData()}`);
// });
