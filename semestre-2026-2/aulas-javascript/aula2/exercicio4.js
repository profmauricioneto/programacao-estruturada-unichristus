const prompt = require("prompt-sync")();

const horas = parseInt(prompt("Digite a quantidade de horas das medições: "));

let acumuladorTemp = 0;
let maiorTemp = -Infinity;
let menorTemp = Infinity;

for (let i = 0; i < horas; i++) {
  let temp = parseFloat(prompt(`Temperatura da hora ${i + 1}: `));
  acumuladorTemp += temp;

  if (maiorTemp < temp) {
    maiorTemp = temp;
  }

  if (menorTemp > temp) {
    menorTemp = temp;
  }
}

let media = acumuladorTemp / horas;
console.log(`Media de Temperaturas = ${media.toFixed(2)}`);
console.log(`Maior Temperatura = ${maiorTemp}`);
console.log(`Menor Temperatura = ${menorTemp}`);
