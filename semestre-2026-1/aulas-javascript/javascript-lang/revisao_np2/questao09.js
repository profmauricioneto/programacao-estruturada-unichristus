// Uma loja quer aplicar desconto em todos os produtos. Faça um programa em JS que:
// Dado um array de preços
// Use .map() para aplicar 10% de desconto
// Exiba os novos valores

const produtos = [
  { nome: "boneco", preco: 15.9 },
  { nome: "bola", preco: 34 },
  { nome: "prancha", preco: 199.9 },
  { nome: "coleira", preco: 10.5 },
  { nome: "tinta", preco: 100.5 },
];

let produtosComDesconto = produtos.map(function (prod) {
  return { ...prod, novoPreco: prod.preco * 0.9 };
  // return { nome: prod.nome, preco: prod.preco * 0.9 };
});

produtosComDesconto.forEach((item) => {
  console.log(
    `Produto: ${item.nome} - Preco Antigo: ${item.preco} - Novo Preço: ${item.novoPreco.toFixed(2)}`,
  );
});
