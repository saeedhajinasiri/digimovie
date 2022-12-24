import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./elements";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          color={'primary'}
          className="App-link"
        >
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
