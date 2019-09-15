import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Demo from './Demo';
import Rando from './Rando';
import Button from './Button';
import BrokenBtn from './BrokenBtn';
import Clicker from './Clicker';

function App() {
  return (
    <div className="App">
      <Clicker maxNum={10}/>
    </div>
  );
}

export default App;
