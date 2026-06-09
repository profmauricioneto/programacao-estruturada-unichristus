const { app, BrowserWindow, ipcMain } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });
  window.loadFile("index.html");
};

app
  .whenReady()
  .then(() => {
    createWindow();
  })
  .catch((error) => {
    console.log(`${error}`);
  });

ipcMain.on("canal-exemplo", (event, message) => {
  console.log(`Main recebendo a mensagem da renderer: ${message}`);

  event.reply("canal-resposta", "Resposta vinda da Main!");
});

app.on("window-all-closed", () => {
  if (process.platform == "darwin") {
    app.quit();
  }
});
