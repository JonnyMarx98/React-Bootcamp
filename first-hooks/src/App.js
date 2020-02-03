import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterHook from './CounterHook';
import Toggler from './Toggler';

function App() {
  return (
    <div className="App">
      <CounterHook/>
      <Toggler/>
    </div>
  );
}

export default App;
