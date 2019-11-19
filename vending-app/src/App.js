import React from 'react';
import logo from './logo.svg';
import {Route, Switch, NavLink} from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Jaffa from './Jaffa';
import Crisps from './Crisps';
import Coke from './Coke';
import NavBar from './NavBar';
import Message from './Message'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={VendingMachine} />
        <Route exact path='/jaffa' component={() => <Jaffa/>} />
        <Route exact path='/crisps' component={() => <Crisps/>} />
        <Route exact path='/coke' component={() => <Coke/>} />
      </Switch>
      <Message />
    </div>
  );
}


export default App;
