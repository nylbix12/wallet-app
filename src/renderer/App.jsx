import { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [address, setAddress] = useState('');

  const createWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    setAddress(wallet.address);
    window.electronAPI.saveKey(wallet.privateKey); // Utilise l'API exposée par preload
  };

  return (
    <div>
      <button onClick={createWallet}>Générer un Wallet</button>
      {address && <p>Adresse : {address}</p>}
    </div>
  );
}

export default App;