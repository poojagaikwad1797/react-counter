import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />  
      </header>
      <footer className="App-footer">
        Counter app using react-redux @Pooja Gaikwad
      </footer>
    </div>
  );
}

export default App;
