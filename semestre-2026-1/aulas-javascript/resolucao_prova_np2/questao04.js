const pedidos = [
  { id: 1, valor: 50, entregue: true },
  { id: 2, valor: 30, entregue: false },
  { id: 3, valor: 80, entregue: true },
  { id: 4, valor: 25, entregue: true },
  { id: 5, valor: 40, entregue: false },
];

// ITEM A
entregues = pedidos.filter((pedido) => {
  return pedido.entregue === true;
});
console.log(`Pedidos Entregues: `);
console.log(entregues);
// ITEM B
totalValor = entregues.reduce((acc, pedido) => {
  return acc + pedido.valor;
}, 0);
console.log(`Valor total dos elementos entregues: ${totalValor}`);
