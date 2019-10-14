import React from 'react';
import logo from './logo.svg';
import './App.css';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
      <GithubUserInfo username='JonnyMarx98'/>
      <GithubUserInfo username='Colt'/>
      <GithubUserInfo username='facebook'/>
      <GithubUserInfo username='StevenCowie'/>
    </div>
  );
}

export default App;
