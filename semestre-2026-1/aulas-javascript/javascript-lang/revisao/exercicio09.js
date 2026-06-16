const precos = [12.6, 54.5, 23, 45.6, 33.4, 55.6, 98.6, 46.2, 34, 78, 43];

const precosComDesconto = precos.map((preco) => {
  return preco * 0.9;
});

console.log(`Preços sem desconto`);
precos.forEach((preco) => {
  console.log(`preço: ${preco.toFixed(2)}`);
});

console.log(`Preços com desconto`);
precosComDesconto.forEach((preco) => {
  console.log(`preço atual: ${preco.toFixed(2)}`);
});
