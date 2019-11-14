import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Dog from './Dog'
import About from './About';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="/">About</NavLink>
        <NavLink exact activeClassName="active-link" to="/dog/r">Dogr</NavLink>
        <NavLink exact activeClassName="active-link" to="/dog/c">Dogc</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/dog/c' component={() => <Dog name="pop"></Dog>} />
        <Route exact path='/dog/r' render={() => <Dog name="pooop"></Dog>} />
      </Switch>
    </div>
  );
}

export default App;
