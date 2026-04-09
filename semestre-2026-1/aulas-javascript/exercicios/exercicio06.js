function valoresPares(inicio, fim) {
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      console.log(`${i}`);
    }
  }
}

const prompt = require('prompt-sync')();
let inicio = parseInt(prompt('Digite o inicio: '));
let fim = parseInt(prompt('Digite o final: '));

let aux = 0;
if (inicio > fim) {
  aux = inicio;
  inicio = fim;
  fim = aux;
}
valoresPares(inicio, fim);