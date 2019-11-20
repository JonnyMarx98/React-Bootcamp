import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Thing from './Thing';

function App() {
  return (
    <div className="App">
      <Route exact path="/food/:name" render={routeProps => <Thing {...routeProps} />} />
    </div>
  );
}

export default App;
