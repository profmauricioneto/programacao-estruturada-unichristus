const prompt = require("prompt-sync")();

const VALOR_POR_KG = 1.2;
let totalLotes = 0;
let valorTotal = 0;
let totalPesos = 0;

do {
  peso = parseFloat(prompt("Peso: "));
  if (peso != 0) {
    totalLotes++;
    valorTotal += peso * VALOR_POR_KG;
    totalPesos += peso;
  }
} while (peso != 0);

if (totalPesos > 50) {
  valorTotal += 0.1 * valorTotal;
}

console.log(`Lotes entregues: ${totalLotes}`);
console.log(`Peso Total: ${totalPesos}`);
console.log(`Valor a pagar: ${valorTotal}`);
