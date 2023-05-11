import React, { useState } from 'react';
import './App.css';
import cat from './catto3.jpg';

function Tests() {
  return (
    <div 
    className="Test">
      <div
        className="transitionDiv" >
        <p>This is a cake-test component.</p>
      </div>
    </div>
  );
}

function Catto() {
  return (  
    <div className="CatDiv">
      <img src={cat} className="App-logo" alt="logo"/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Catto />
        <p>
          Cake
        </p>
        <Tests />
      </header>
    </div>
  );
}

export default App;