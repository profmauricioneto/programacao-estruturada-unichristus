const prompt = require('prompt-sync')();

let horas = parseInt(prompt('Digite a quantidade de horas lidas: '));

let maiorTemperatura;
let menorTemperatura;
let mediaTemperatura = 0;
for (let i = 0; i < horas; i++) {
  let temperatura = parseFloat(prompt(`Digite a temperatura da hora ${i + 1}: `));
  if (i == 0) {
    maiorTemperatura = temperatura;
    menorTemperatura = temperatura;
  }
  mediaTemperatura += temperatura;
  maiorTemperatura = (temperatura > maiorTemperatura) ? temperatura : maiorTemperatura;
  menorTemperatura = (temperatura < menorTemperatura) ? temperatura : menorTemperatura;
}

console.log(`Media das Temperaturas: ${mediaTemperatura / horas}`);
console.log(`Maior Temperatura: ${maiorTemperatura}`);
console.log(`Menor Temperatura: ${menorTemperatura}`);


