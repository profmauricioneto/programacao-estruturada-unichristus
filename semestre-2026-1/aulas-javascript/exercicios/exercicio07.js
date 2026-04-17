/** 
 * Crie um objeto chamado estoque que armazene informações sobre
produtos disponíveis em uma loja. Cada produto deve ter as
propriedades nome, preço e quantidade. Em seguida, crie uma função
chamada verificarEstoque que recebe o nome de um produto como
parâmetro e retorna uma mensagem informando se o produto está
disponível em estoque e quantas unidades estão disponíveis.
 */
const prompt = require('prompt-sync')();

let estoque = [
  { nome: 'camisa', preco: 50.0, quantidade: 27 },
  { nome: 'calça', preco: 150.0, quantidade: 15 },
  { nome: 'jaqueta', preco: 250.0, quantidade: 5 },
  { nome: 'casaco', preco: 330.0, quantidade: 3 },
  { nome: 'tenis', preco: 400.0, quantidade: 10 },
];

function verificarEstoque(nomeProduto) {
  let encontrou = false;
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].nome === nomeProduto) {
      console.log(`Produto ${nomeProduto} encontrado`);
      console.log(`Quantidade em estoque: ${estoque[i].quantidade}`);
      encontrou = true;
    }
  }
  if (!encontrou) {
    console.log(`Produto ${nomeProduto} não encontrad em estoque.`);
  }
}

// verificarEstoque('cachecol');

function adicionarProduto() {
  let produto = {}
  produto.nome = prompt('Digite o nome do produto: ');
  produto.preco = parseFloat(prompt('Digite o preço do produto: '));
  produto.quantidade = parseInt(prompt('Digite a quantidade deste item: '));
  // console.log(produto);
  estoque.push(produto);
}

function menu() {
  console.log(`Bem-vindo ao Programa de Estoque!`);
  console.log(`1 - Adicionar produto ao estoque.`);
  console.log(`2 - Verificar se um produto esta no estoque.`);
  console.log(`3 - Mostrar situação do estoque.`);
  console.log(`4 - Sair`);
}
// adicionarProduto();
// console.log(estoque);

function main() {
  let opcao = 0;
  do {
    menu()
    opcao = parseInt(prompt('Opção: '))
    switch (opcao) {
      case 1:
        adicionarProduto();
        break;
      case 2:
        let nomeProduto = prompt('Digite o nome do produto: ');
        verificarEstoque(nomeProduto);
        break;
      case 3:
        console.log(`Estado atual de estoque:`);
        console.log(estoque);
        break;
      case 4:
        console.log(`Saindo do Programa!`);
        break;
      default:
        console.log(`Nenhuma opção válida foi digitada!`);
    }
  } while (opcao != 4);
}

main();