const pedidos = [
  { id: 1, cliente: "Ana", valor: 250.0, status: "entregue" },
  { id: 2, cliente: "Carlos", valor: 120.0, status: "pendente" },
  { id: 3, cliente: "Mariana", valor: 450.0, status: "entregue" },
  { id: 4, cliente: "João", valor: 90.0, status: "cancelado" },
  { id: 5, cliente: "Fernanda", valor: 300.0, status: "entregue" },
  { id: 6, cliente: "Joana", valor: 250.0, status: "entregue" },
  { id: 7, cliente: "Rafael", valor: 120.0, status: "pendente" },
  { id: 8, cliente: "Zaca", valor: 450.0, status: "entregue" },
  { id: 9, cliente: "Paulo", valor: 90.0, status: "cancelado" },
  { id: 10, cliente: "Maria", valor: 300.0, status: "entregue" },
];

// let entregues = pedidos.filter(function (pedido) {
//   return pedido.status === "entregue";
// });
// console.log(entregues);

// let maioresValores = entregues.filter(function (pedido) {
//   return pedido.valor >= 300;
// });
// console.log(maioresValores);

let clientesFiltrados = pedidos
  .filter(function (pedido) {
    return pedido.status === "entregue";
  })
  .filter(function (pedido) {
    return pedido.valor >= 300;
  });

console.log(clientesFiltrados);
