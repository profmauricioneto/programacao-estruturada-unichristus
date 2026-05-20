// Um cliente procura um produto específico. Faça um programa em JS que:
// Dado um array de nomes de produtos
// Use .find() para localizar um produto
// Informe se foi encontrado ou não

const produtos = [
  { nome: "boneco", preco: 15.9 },
  { nome: "bola", preco: 34 },
  { nome: "prancha", preco: 199.9 },
  { nome: "coleira", preco: 10.5 },
  { nome: "tinta", preco: 100.5 },
];

let produtoEncontrado = produtos.find(function (prod) {
  return prod.nome === "parafuseta";
});

if (!produtoEncontrado) {
  console.log(`Produto não encontrado`);
} else {
  console.log(produtoEncontrado);
}
