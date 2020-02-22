import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello  from './components/Hello'
 
function App() {
  return (
    <div className="App">
      <Hello/>
      <Welcome name="Bharat Rathor" city="Indore">
        <p> This is the child element</p>
      </Welcome>
    </div>
  );
}

export default App;
