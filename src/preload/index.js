import { contextBridge } from 'electron';

// Exemple : Expose une API pour interagir avec le système de fichiers
contextBridge.exposeInMainWorld('electronAPI', {
  saveKey: (key) => require('fs').writeFileSync('key.txt', key), // À remplacer par un stockage sécurisé !
});