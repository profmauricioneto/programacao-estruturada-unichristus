// 1. Pedir nome do produto por meio de entrada de dados (FEITO)
// 2. Fazer uma funcao para gerar um relatório
// exemplo:
//    produto x - total em valor: y
//    ....
//    total de valor em estoque: xx.xx
// 3. Fazer uma funcao de venda de produto
// 4. Fazer um menu de opcoes para o usuario
const prompt = require("prompt-sync")();

let estoque = [
  { nome: "shampoo", preco: 20.0, quantidade: 10 },
  { nome: "sabonete", preco: 5.0, quantidade: 25 },
  { nome: "condicionador", preco: 17.0, quantidade: 7 },
  { nome: "desodorante", preco: 7.0, quantidade: 30 },
  { nome: "esfoliante", preco: 30.0, quantidade: 8 },
];

function verificarEstoque(nomeProduto) {
  encontrou = false;
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].nome === nomeProduto.toLowerCase()) {
      encontrou = true;
      console.log(`Produto ${estoque[i].nome} disponível em estoque!`);
      console.log(`Quantidade: ${estoque[i].quantidade}`);
    }
  }
  if (!encontrou) {
    console.log(`Produto não encontrado no estoque!`);
  }
}

let produto = prompt("Qual o nome do produto? ");
verificarEstoque(produto);
