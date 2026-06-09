const { ipcRenderer } = require("electron");

document.getElementById("btn-enviar").addEventListener("click", () => {
  ipcRenderer.send(
    "canal-exemplo",
    "Mensagem enviada da renderer para a main!",
  );
});

ipcRenderer.on("canal-resposta", (event, message) => {
  console.log(`Mensagem recebida da Main: ${message}`);
});
