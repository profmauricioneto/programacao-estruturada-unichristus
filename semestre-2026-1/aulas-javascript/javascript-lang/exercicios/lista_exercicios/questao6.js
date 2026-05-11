// Um usuário deseja armazenar itens de compra. Faça um programa em JS que:
// Crie um array com pelo menos 5 itens
// Exiba:
// Todos os itens
// A quantidade total de itens

let itens = [
  { nome: "jaqueta", quantidade: 10 },
  { nome: "skate", quantidade: 5 },
  { nome: "violão", quantidade: 12 },
  { nome: "bola", quantidade: 20 },
  { nome: "chinelo", quantidade: 35 },
];

let contador = 0;
itens.forEach(function (item) {
  console.log(`Nome do Produto: ${item.nome} - quantidade: ${item.quantidade}`);
  contador += item.quantidade;
});
console.log(`Quantidade Total de Itens: ${contador}`);
