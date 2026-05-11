let valores = [1, 5, 3, 6, 4, 10, 42, 34, 23, 46];

let maiorValor = valores.reduce(function (acc, atual) {
  return acc >= atual ? acc : atual;
}, 0);

console.log(maiorValor);
