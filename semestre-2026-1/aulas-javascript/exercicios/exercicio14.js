const tarefas = require("./data/tarefas.json");

function obterTitulosConcluidos() {
  let titulosConcluidos = tarefas
    .filter((tarefa) => {
      return tarefa.concluido === true;
    })
    .map((tarefa) => {
      return tarefa.titulo;
    });
  return titulosConcluidos;
}

const encontrarTarefaPorId = (id) => {
  let tarefaEncontrada = tarefas.find((tarefa) => {
    return tarefa.id === id;
  });
  return tarefaEncontrada;
};

console.log(encontrarTarefaPorId(4));

// console.log(obterTitulosConcluidos());
