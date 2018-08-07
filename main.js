const {net, app, BrowserWindow} = require('electron');

let globalWin;

const makeRequest = () => {
  // const request = net.request('https://github.com');
  //
  // request.on('response', res => {
  //   console.log('response status code: ', response.statusCode);
  //   console.log('headers: ', JSON.stringify(response.headers));
  //
  //   res.on('data', chunck => {
  //     console.log('body: ', chunk);
  //   });
  //   res.on('end', () => {
  //     console.log('done');
  //   });
  // });
}

const createWindow = () => {
  win = new BrowserWindow({width: 800, height: 600})

  win.loadFile('index.html');

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

const main = () => {
  makeRequest();
  createWindow();
}

app.on('ready', main);

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
