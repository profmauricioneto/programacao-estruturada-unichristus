const notas = [6.5, 8.0, 7.2, 5.0, 9.1, 4.8, 7.5];
// item a
somatorio = notas.reduce((acc, nota) => {
  return acc + nota;
}, 0);
media = somatorio / notas.length;
console.log(`Media da Turma: ${media.toFixed(2)}`);
// item b
console.log(`ITEM B`);
aprovados = notas
  .filter((nota) => {
    return nota >= 7.0;
  })
  .forEach((nota) => {
    console.log(`Nota = ${nota}`);
  });
// item c
console.log(`ITEM C`);
acimaDaMedia = notas
  .filter((nota) => {
    return nota > media;
  })
  .forEach((nota) => {
    console.log(`Nota = ${nota}`);
  });
