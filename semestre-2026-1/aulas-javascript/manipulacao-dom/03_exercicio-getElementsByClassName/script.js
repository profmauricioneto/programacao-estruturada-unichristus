function selecionarObrigatorias() {
  disciplinasEletivas = document.getElementsByClassName("eletiva");
  // console.log(disciplinasEletivas);

  // for (let i = 0; i < disciplinasEletivas.length; i++) {
  //   disciplinasEletivas[i].style.display = "none";
  // }

  for (let i = 0; i < disciplinasEletivas.length; i++) {
    disciplinasEletivas[i].classList.add("oculta");
  }
}

function selecionarEletivas() {
  disciplinasObrigatorias = document.getElementsByClassName("obrigatoria");

  // for (let i = 0; i < disciplinasObrigatorias.length; i++) {
  //   disciplinasObrigatorias[i].style.display = "none";
  // }

  for (let i = 0; i < disciplinasObrigatorias.length; i++) {
    disciplinasObrigatorias[i].classList.add("oculta");
  }
}

function mostrarTodas() {
  let disciplinasObrigatorias = document.getElementsByClassName("obrigatoria");
  let disciplinasEletivas = document.getElementsByClassName("eletiva");

  for (let i = 0; i < disciplinasEletivas.length; i++) {
    disciplinasEletivas[i].classList.remove("oculta");
  }

  for (let i = 0; i < disciplinasObrigatorias.length; i++) {
    disciplinasObrigatorias[i].classList.remove("oculta");
  }
}
