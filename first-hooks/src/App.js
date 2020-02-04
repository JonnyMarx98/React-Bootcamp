import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterHook from './CounterHook';
import Toggler from './Toggler';
import SimpleHooksForm from './SimpleHooksForm';

function App() {
  return (
    <div className="App">
      <CounterHook/>
      <Toggler/>
      <SimpleHooksForm/>
    </div>
  );
}

export default App;
