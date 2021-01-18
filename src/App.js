import React from 'react';
import {
	ILoveYourWallet_adresse,
	ILoveYourWallet_abi,
} from './contract/ILoveYourWallet';
import Dapp from './Dapp';
import { useContract } from './context/useContract';

export const ILoveYourWalletContext = React.createContext(null);

function App() {
	const iLoveYourWallet = useContract(
		ILoveYourWallet_adresse,
		ILoveYourWallet_abi
	);
	return (
		<ILoveYourWalletContext.Provider value={iLoveYourWallet}>
			<Dapp />
		</ILoveYourWalletContext.Provider>
	);
}

export default App;
