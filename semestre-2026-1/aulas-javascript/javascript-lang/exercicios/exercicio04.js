const prompt = require('prompt-sync')();

let valor = parseInt(prompt('Digite um numero inteiro: '));

// verificar se é positivo ou negativo usando operador ternário!
let tipoValor = (valor >= 0) ? `${valor}: sinal +` : `${valor}: sinal -`

console.log(tipoValor);
