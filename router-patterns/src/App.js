import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import Thing from './Thing';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/food/:name" render={routeProps => <Thing {...routeProps} />} />
        <Route render={() => <h1>Error no jaffa cakes here</h1>} />
      </Switch>
      
    </div>
  );
}

export default App;
