const assinaturas = [
  { usuario: "Ana", plano: "basico", valor: 29.9 },
  { usuario: "Bruno", plano: "premium", valor: 59.9 },
  { usuario: "Carla", plano: "basico", valor: 29.9 },
  { usuario: "Daniel", plano: "familia", valor: 79.9 },
  { usuario: "Eduarda", plano: "premium", valor: 59.9 },
];

// Desenvolva um programa em JavaScript que:
// 1. Utilize o método reduce para calcular o faturamento total mensal da plataforma;
// 2. Utilize o método reduce para calcular o faturamento total por tipo de plano (basico, premium, familia);
// 3. Exiba os resultados no console.
let faturamentoMensal = assinaturas.reduce(function (acc, assinatura) {
  return acc + assinatura.valor;
}, 0);

console.log(faturamentoMensal);

let faturamentoPlanoBasico = assinaturas
  .filter(function (assinatura) {
    return assinatura.plano === "basico";
  })
  .reduce(function (acc, assinatura) {
    return acc + assinatura.valor;
  }, 0);

console.log(faturamentoPlanoBasico);
