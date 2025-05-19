// Ici, tu peux exposer des APIs Electron au frontend (de manière sécurisée)
import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  doThing: () => console.log('Hello from Electron!'),
});