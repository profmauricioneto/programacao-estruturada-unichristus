const prompt = require("prompt-sync")();

let valorKwh = parseFloat(prompt("Valor de kwh consumido: "));

if (valorKwh < 0) {
  console.log("Dado Inválido");
  process.exit();
}

let tarifa_faixa_1 = 0.6;
let tarifa_faixa_2 = 0.75;
let tarifa_faixa_3 = 0.9;
if (valorKwh >= 0 && valorKwh <= 100) {
  valorKwh = valorKwh * tarifa_faixa_1;
} else if (valorKwh <= 300) {
  diff = valorKwh - 100;
  valorKwh = diff * tarifa_faixa_2 + 100 * tarifa_faixa_1;
} else {
  diff = valorKwh - 300;
  valorKwh =
    100 * tarifa_faixa_1 + 200 * tarifa_faixa_2 + diff * tarifa_faixa_3;
}

console.log(`
  valor a ser pago: ${valorKwh}  
  `);
