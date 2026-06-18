let numeroAleatorio = parseInt(Math.random() * (100 - 1) + 1);

console.log(numeroAleatorio);

function verificarProximidadeValor() {
  let palpite = document.getElementById("input-palpite").value;
  let areaDica = document.getElementById("dica");
  if (palpite < numeroAleatorio) {
    areaDica.textContent = "Palpite muito menor que o Valor";
  } else if (palpite > numeroAleatorio) {
    areaDica.textContent = "Palpite muito maior que o Valor";
  } else {
    areaDica.style.color = "green";
    areaDica.textContent = "acertou!";
    let imagem = document.getElementById("img-interrogacao");
    imagem.style.display = "none";
    document.getElementById("valor-aleatorio").textContent = numeroAleatorio;
  }
}

document.getElementById("btn-palpitar").addEventListener("click", () => {
  verificarProximidadeValor();
});
