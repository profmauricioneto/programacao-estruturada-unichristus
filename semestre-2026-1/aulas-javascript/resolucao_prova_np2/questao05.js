const consumo = [12, 18, 25, 10, 30, 22, 15, 60, 40];

// ITEM A
consumosElevados = consumo.filter((c) => {
  return c > 20;
});
console.log(`Consumos elevados: `);
console.log(consumosElevados);

// ITEM B
total = consumosElevados.reduce((acc, c) => {
  return acc + c;
}, 0);
console.log(`Consumo total = ${total}`);
