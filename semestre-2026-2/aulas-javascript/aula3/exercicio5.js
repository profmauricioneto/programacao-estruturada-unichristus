let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maiorValor = valores.reduce(function (acc, current) {
  console.log(acc);
  return acc > current ? acc : current;
}, 0);

console.log(maiorValor);
