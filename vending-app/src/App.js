import React from 'react';
import logo from './logo.svg';
import {Route, Switch, NavLink} from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Jaffa from './Jaffa';
import Crisps from './Crisps';
import Coke from './Coke';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="/">Vending Machine</NavLink>
        <NavLink exact activeClassName="active-link" to="/jaffa">Jaffa Cakes</NavLink>
        <NavLink exact activeClassName="active-link" to="/crisps">Crisps</NavLink>
        <NavLink exact activeClassName="active-link" to="/coke">Coke</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={VendingMachine} />
        <Route exact path='/jaffa' component={() => <Jaffa/>} />
        <Route exact path='/crisps' component={() => <Crisps/>} />
        <Route exact path='/coke' component={() => <Coke/>} />
      </Switch>
    </div>
  );
}


export default App;
