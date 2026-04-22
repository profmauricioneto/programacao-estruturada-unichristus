const pedidos = [
  { id: 1, cliente: "Ana", valor: 250.0, status: "entregue" },
  { id: 2, cliente: "Carlos", valor: 120.0, status: "pendente" },
  { id: 3, cliente: "Mariana", valor: 450.0, status: "entregue" },
  { id: 4, cliente: "João", valor: 90.0, status: "cancelado" },
  { id: 5, cliente: "Fernanda", valor: 300.0, status: "entregue" },
];

// Desenvolva um programa em JavaScript que:
// 1.Utilize o método filter para criar um novo array contendo apenas os pedidos com status “entregue”;
// 2. Considere apenas os pedidos cujo valor seja maior ou igual a R$ 200,00;
// 3. Exiba o novo array resultante no console.
