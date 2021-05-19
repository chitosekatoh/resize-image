const { app, BrowserWindow } = require('electron')
const fs = require('fs')

let mainWindow = null;

// アプリ起動
app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 600, height: 350,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
//  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

// ウィンドウクローズ
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// アクティブ
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
