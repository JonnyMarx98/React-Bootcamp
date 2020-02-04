import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterHook from './CounterHook';
import Toggler from './Toggler';
import SimpleHooksForm from './SimpleHooksForm';
import Clicker from './Clicker';
import SWMovies from './SWMovies';

function App() {
  return (
    <div className="App">
      {/* <CounterHook/>
      <Toggler/>
      <SimpleHooksForm/> */}
      <Clicker/>
      <SWMovies/>
    </div>
  );
}

export default App;
