const {app, BrowserWindow} = require('electron');

let globalWin;

const createWindow = () => {
  win = new BrowserWindow({width: 800, height: 600})

  win.loadFile('index.html');

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platfrom !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})
