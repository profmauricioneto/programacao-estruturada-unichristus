const prompt = require("prompt-sync")();

distancia = parseFloat(prompt("Distancia: "));
inicioCorrida = parseInt(prompt("Horário de Inicio(0 - 23): "));
fidelidade = prompt("Possui fidelidade? (S/N) ");

const TARIFA_BASE = 5;
const VALOR_POR_KM = 2.5;
const DESCONTO_FIDELIDADE = 4;

valorTotal = distancia * VALOR_POR_KM + TARIFA_BASE;
if (inicioCorrida >= 22 || inicioCorrida <= 5) {
  valorTotal = valorTotal - 0.2 * valorTotal;
}
if (fidelidade === "sim") {
  valorTotal -= DESCONTO_FIDELIDADE;
}

if (valorTotal < 5) {
  valorTotal = TARIFA_BASE;
}

console.log(`VALOR A PAGAR R$ ${valorTotal.toFixed(2)}`);
