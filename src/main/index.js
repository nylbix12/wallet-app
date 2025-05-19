import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'), // Bridge
    },
  });

  // Dev: Charge l'URL de Vite | Prod: Charge le build React
  win.loadURL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5173' // Port par défaut de Vite
      : `file://${path.join(__dirname, '../renderer/index.html')}`
  );
}

app.whenReady().then(createWindow);