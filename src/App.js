import './App.css';
import Web3 from 'web3';
import {contractAbi, contractAddress} from './utils/constants';
import React from 'react';

const web3 = new Web3("ws://localhost:8545")
const tokenContract = new web3.eth.Contract(contractAbi, contractAddress);

function App() {
  const [accountAddress, setAccountAddress] = React.useState('');
  const [showBalance, setShowBalance] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const balanceOfMyToken = await tokenContract.methods.balanceOf(accountAddress).call();
    setShowBalance(balanceOfMyToken);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value = {accountAddress}
          onChange = {(e) => setAccountAddress(e.target.value)}
          placeholder='account address'
        />
        <br/>
        <button>
          Show balance
        </button>
      </form>
      <br/>
      <label>{showBalance}</label>
    </div>
  );
}

export default App;
