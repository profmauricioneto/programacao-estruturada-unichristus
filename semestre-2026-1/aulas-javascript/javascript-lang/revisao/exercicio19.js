const pedidos = [
  { id: 1, produto: "bola", valor: 15.0, status: "cancelado" },
  { id: 2, produto: "boneco", valor: 25.0, status: "pendente" },
  { id: 3, produto: "pipa", valor: 50.0, status: "cancelado" },
  { id: 4, produto: "ioio", valor: 10.0, status: "pendente" },
  { id: 5, produto: "carrinho", valor: 60.0, status: "cancelado" },
  { id: 6, produto: "piao", valor: 10.0, status: "pendente" },
  { id: 7, produto: "vara", valor: 5.0, status: "pendente" },
  { id: 8, produto: "bambole", valor: 40.0, status: "cancelado" },
  { id: 9, produto: "ps5", valor: 3500.0, status: "cancelado" },
];
// calculado o faturamento total
let totalFaturamento = pedidos.reduce((acc, pedido) => {
  return acc + pedido.valor;
}, 0);
console.log(`Total de Faturamento ${totalFaturamento.toFixed(2)}`);
// filtrando elementos cancelados
let elementosCancelados = pedidos.filter((pedido) => {
  return pedido.status === "cancelado";
});
console.log(`Pedidos Cancelados: `);
console.log(elementosCancelados);
// busca pelo maior valor dos pedidos
let maiorValor = pedidos.reduce((acc, pedido) => {
  return acc > pedido.valor ? acc : pedido.valor;
}, 0);
console.log(`Maior entre os pedidos = ${maiorValor}`);
// adaptar os valores
let pedidosAdaptados = pedidos.map((pedido) => {
  return {
    id: pedido.id,
    produto: pedido.produto,
    valor: `R$ ${pedido.valor}`,
    status: pedido.status,
  };
});
console.log("Array de Pedidos Adaptados: ");
console.log(pedidosAdaptados);
