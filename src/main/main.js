import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import * as path from 'path';

let mainWindow;

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({});
  if (!canceled) {
    return filePaths[0];
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1220,
    height: 760,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
        color: '#ffffff',
        symbolColor: '#000000',
        height: 40
    },
    webPreferences: {
      preload: path.join(__dirname, '/../preload/preload.js'),
      webSecurity: false
    }
  });

  // Vite DEV server URL
  mainWindow.loadURL('http://localhost:5174/dashboard');
  mainWindow.on('closed', () => mainWindow = null);
}

app.whenReady().then(() => {
  ipcMain.handle('dialog:openFile', handleFileOpen);
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow == null) {
    createWindow();
  }
});