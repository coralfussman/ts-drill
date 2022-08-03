import React from 'react';
import AlgoRunner from './AlgoRunner';
import logo from './logo.svg';
import './styling.css';

function App() {
  return (
    <div className="App">
      <Ban />
      <Main></Main>
    </div>
  );
}

function Ban() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Coral's Algo Playground</h2>
        <p>Hit run to test algos</p>
      </header>
    </>
  );
}

function Main() {
  return (
    <div className="main-container">
      <h2>Algos Heres</h2>
      <AlgoRunner></AlgoRunner>
    </div>
  );
}
export default App;
