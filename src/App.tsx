import React from 'react';
import logo from './logo.svg';
import './App.css';

import aa from '../package.json'

function App() {
  console.log(`Version: ${aa.version}`)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <br />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="App-version">Version: {aa.version}</p>
      </header>
    </div>
  );
}

export default App;
