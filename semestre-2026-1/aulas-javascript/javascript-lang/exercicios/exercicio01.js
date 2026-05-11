const prompt = require('prompt-sync')()

let nome = prompt('Digite seu nome: ');
// console.log(nome.toUpperCase());

let idade = parseInt(prompt('Digite sua idade: '));
let saudacao = `Olá, Sr(a) ${nome}!
Sua idade é ${idade}
Logo seu ano de nascimento é: ${new Date().getFullYear() - idade}`

console.log(saudacao);