function definirAlarme() {
  let hora = parseInt(document.getElementById('horas').value);
  let minutos = parseInt(document.getElementById('minutos').value);
  let mensagem = document.getElementById('mensagem').value;

  console.log(hora);
  console.log(minutos);
  console.log(mensagem);

  if (hora == new Date().getHours() && minutos == new Date().getMinutes()) {
    console.log('entrou no caso!');
    alert(`Alarme ativo! ${mensagem}`);
  }
}

let setAlarme = setInterval(() => definirAlarme(), 1000);