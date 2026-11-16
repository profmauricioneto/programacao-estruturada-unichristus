const prompt = require("prompt-sync")();

let aprovados = 0;
let reprovados = 0;
let maiorNota = -10;
let contadorNotas = 0;

do {
  nota = parseFloat(prompt("Nota: "));
  if (nota >= 0) {
    if (nota >= 7.0) {
      aprovados++;
    } else {
      reprovados++;
    }
    if (nota > maiorNota) {
      maiorNota = nota;
    }
    contadorNotas++;
  }
} while (nota >= 0);

if (contadorNotas == 0) {
  console.log(`Nenhuma nota foi inserida!`);
} else {
  console.log(`Quantidade de Aprovados: ${aprovados}`);
  console.log(`Quantidade de Reprovados: ${reprovados}`);
  console.log(`Maior Nota: ${maiorNota}`);
}
