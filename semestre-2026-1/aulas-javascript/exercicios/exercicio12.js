const pedidos = [
  { id: 1, cliente: "Ana", valor: 250.0, status: "entregue" },
  { id: 2, cliente: "Carlos", valor: 120.0, status: "pendente" },
  { id: 3, cliente: "Mariana", valor: 450.0, status: "entregue" },
  { id: 4, cliente: "João", valor: 90.0, status: "cancelado" },
  { id: 5, cliente: "Fernanda", valor: 300.0, status: "entregue" },
];

let filtroEntregues = pedidos
  .filter(function (item) {
    return item.status === "entregue";
  })
  .filter(function (item) {
    return item.valor >= 200;
  })
  .forEach(function (item) {
    console.log(`Cliente: ${item.cliente}`);
  });
