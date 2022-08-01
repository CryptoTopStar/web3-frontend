import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import {contractAbi, contractAddress} from './utils/constants';

const web3 = new Web3("ws://localhost:8545")
const tokenContract = new web3.eth.Contract(contractAbi, contractAddress);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
