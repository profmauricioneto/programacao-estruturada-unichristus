// Um e-commerce deseja aplicar um desconto de 10% em todos os produtos com preço acima de 100 reais, exibindo o nome e o novo valor de cada item.

const produtos = [
  { nome: "Fone de Ouvido", preco: 89.9 },
  { nome: "Teclado Mecânico", preco: 199.9 },
  { nome: "Monitor", preco: 499.9 },
  { nome: "Cabo HDMI", preco: 29.9 },
];

// a. Use filter() para selecionar apenas os produtos com preço acima de 100.
// b. Utilize map() para criar um novo array com o nome e o preço após o desconto.
// c. Exiba o resultado com forEach() no formato:
// Produto: Teclado Mecânico | Novo preço: R$179.91
