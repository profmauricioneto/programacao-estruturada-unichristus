const prompt = require("prompt-sync")();

categoria = parseInt(prompt("Digite a categora de problema: "));

switch (categoria) {
  case 1: {
    console.log("Problemas de Login");
    break;
  }
  case 2: {
    console.log("Problemas de Pagamento");
    break;
  }
  case 3: {
    console.log("Duvidas sobre Produtos");
    break;
  }
  case 4: {
    console.log("Suporte Técnico");
    break;
  }
  case 5: {
    console.log("Cancelamento de Serviços");
    break;
  }
  default: {
    console.log("Caso Inválido");
  }
}
