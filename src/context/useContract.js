import { useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';
import { Web3Context } from 'web3-hooks';

export const useContract = (address, abi) => {
  const [web3State] = useContext(Web3Context);
  const [contract, setContract] = useState(null);
  useEffect(() => {
    if (web3State.signer) {
      setContract(new ethers.Contract(address, abi, web3State.signer));
    } else {
      setContract(null);
    }
  }, [web3State.signer, address, abi]);
  return contract;
};
