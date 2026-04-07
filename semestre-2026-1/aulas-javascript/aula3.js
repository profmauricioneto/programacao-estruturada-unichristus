const prompt = require('prompt-sync')();

let idade = parseInt(prompt('Digite sua idade: '))

let isAdult = (idade >= 18) ? "Adulto" : "Xovem!";

console.log(isAdult);
