import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
    },
  });

  // Charge l'URL de dev en mode développement
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173'); // Port par défaut de Vite
  } else {
    win.loadFile(path.join(__dirname, '../renderer/index.html'));
  }
}

app.whenReady().then(createWindow);