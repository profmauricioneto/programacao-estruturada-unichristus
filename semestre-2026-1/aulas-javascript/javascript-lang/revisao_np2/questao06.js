// Um usuário deseja armazenar itens de compra. Faça um programa em JS que:
// Crie um array com pelo menos 5 itens
// Exiba:
// Todos os itens
// A quantidade total de itens

const produtos = [
  { nome: "boneco", preco: 15.9 },
  { nome: "bola", preco: 34 },
  { nome: "prancha", preco: 199.9 },
  { nome: "coleira", preco: 10.5 },
  { nome: "tinta", preco: 100.5 },
];

produtos.forEach(function (item) {
  console.log(`Produto: ${item.nome} - preço: ${item.preco}`);
});

let valorTotal = produtos.reduce(function (acc, item) {
  return acc + item.preco;
}, 0);

console.log(`Valor total dos produtos: ${valorTotal.toFixed(2)}`);
