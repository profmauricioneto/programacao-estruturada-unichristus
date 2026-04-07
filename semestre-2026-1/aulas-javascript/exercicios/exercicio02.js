const prompt = require('prompt-sync')();

let consumoKwt = parseFloat(prompt('Quantidade de KWH: '))
if (consumoKwt < 0 || typeof (consumoKwt) != 'number' || isNaN(consumoKwt)) {
  console.log('Erro. Valor de entrada não compatível');
  return
}

let tarifa = 0

if (consumoKwt <= 100) {
  tarifa = 0.6
} else if (consumoKwt > 100 && consumoKwt <= 300) {
  tarifa = 0.75
} else {
  tarifa = 0.9
}

let valorFinal = consumoKwt * tarifa;
console.log(`Valor da tarifa é ${tarifa}. Total a pagar = ${valorFinal.toFixed(2)}`);
