const estoque = [
  { nome: "bola quadrada", preco: 100, quantidade: 5 },
  { nome: "boneco heman", preco: 50, quantidade: 10 },
  { nome: "susy", preco: 50, quantidade: 15 },
  { nome: "revista playgound", preco: 10.5, quantidade: 20 },
  { nome: "boneco fofão", preco: 80.6, quantidade: 15 },
  { nome: "piper", preco: 2.99, quantidade: 50 },
  { nome: "posta de dente kolinos", preco: 5.99, quantidade: 25 },
  { nome: "laptop da xuxa", preco: 200, quantidade: 5 },
  { nome: "oi mundo", preco: 600, quantidade: 3 },
  { nome: "bala soft", preco: 7.99, quantidade: 25 },
  { nome: "disket 100kb", preco: 8, quantidade: 34 },
];

// criar uma função que receba a quantidade mínima e retornar um array com os elementos que possuem essa quantidade mínima de produtos.
const filtrarPorQuantidade = (quantidade) => {
  return estoque.filter((produto) => {
    return produto.quantidade >= quantidade;
  });
};

let elementosAcimaDe20 = filtrarPorQuantidade(20);
console.log(elementosAcimaDe20);

// criar uma função que receba um valor de desconto e retorne
// o array com os precos alterados por esse desconto.
const valoresComDesconto = (desconto) => {
  let descontoAtualizado = 1 - desconto / 100;
  return estoque.map((produto) => {
    return {
      nome: produto.nome,
      precoDesconto: produto.preco * descontoAtualizado,
      quantidade: produto.quantidade,
    };
  });
};

// let precosComDesconto = valoresComDesconto(20);
// console.log(precosComDesconto);

const valoresComDesconto2 = (desconto) => {
  let descontoAtualizado = 1 - desconto / 100;
  return estoque.map((produto) => {
    return {
      ...produto,
      precoDesconto: produto.preco * descontoAtualizado,
    };
  });
};

let precosComDesconto = valoresComDesconto2(20);
console.log(precosComDesconto);

// Crie uma função que calcule o total do valor do estoque.
const calcularTotalEstoque = () => {
  return estoque.reduce((acc, produto) => {
    return acc + produto.preco * produto.quantidade;
  }, 0);
};

let totalEstoque = calcularTotalEstoque();
console.log(totalEstoque);

// Crie uma função que busque o elemento pelo nome, se o elemento não for encontrado, retorne "elemento não encontrado"
const encontrarPorNome = (nome) => {
  nome = nome.toLowerCase().trim();
  const produtoEncontrado = estoque.find((produto) => {
    return produto.nome === nome;
  });
  if (!produtoEncontrado) {
    return "produto não encontrado";
  }
  return produtoEncontrado;
};

let produto = encontrarPorNome("cassete");
console.log(produto);
