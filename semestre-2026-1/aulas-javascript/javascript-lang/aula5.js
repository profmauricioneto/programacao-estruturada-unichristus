let frutas = ["banana", "maça", "pêra"];
frutas.push("uva");
console.log(frutas);
console.log(frutas.shift());

let linguagens = ["java", "javascript", "c"];
linguagens.push("python");
// console.log(linguagens);
// console.log(linguagens.pop());
// console.log(linguagens);
// for (let i = 0; i < linguagens.length; i++) {
//   console.log(`Aprendi a programar em: ${linguagens[i]}`);
// }

// for (let linguagem of linguagens) {
//   console.log(`Apredendo a programar em: ${linguagem}`);
// }
linguagens.forEach(function (linguagem) {
  console.log(`Aprendendo a programar em: ${linguagem}`);
});

let idades = [34, 45, 11, 8, 32, 14, 68, 49];

let adultos = idades.filter(function (idade) {
  return idade >= 18;
});

console.log(adultos);
