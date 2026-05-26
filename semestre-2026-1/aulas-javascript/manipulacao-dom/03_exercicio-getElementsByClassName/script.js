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

function destacarObrigatorias() {
  let elementosObrigatorios = document.getElementsByClassName("obrigatoria");
  for (let i = 0; i < elementosObrigatorios.length; i++) {
    elementosObrigatorios[i].classList.toggle("destaque-obrigatoria");
  }
}

function destacarTudo() {
  let obrigatorios = document.getElementsByClassName("obrigatoria");
  let eletivas = document.getElementsByClassName("eletiva");
  let totalDisciplinas = [...obrigatorios, ...eletivas];

  for (let i = 0; i < totalDisciplinas.length; i++) {
    totalDisciplinas[i].classList.toggle("destaque-tudo");
  }
}
