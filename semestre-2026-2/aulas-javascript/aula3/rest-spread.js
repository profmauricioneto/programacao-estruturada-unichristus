function somar(...valores) {
  // let soma = 0;
  // for (let i = 0; i < valores.length; i++) {
  //   soma += valores[i];
  // }
  // return soma;
  return valores.reduce((acc, current) => acc + current, 0);
}

console.log(somar());
