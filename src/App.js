import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello  from './components/Hello'
import Message  from './components/Message'
import ParentComponent from './components/ParentComponet'
import PersonList from './components/PersonList'

 
function App() {
  return (
    <div className="App">
      <PersonList/>
    </div>
  );
}

export default App;
