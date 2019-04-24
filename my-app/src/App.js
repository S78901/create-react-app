import React from 'react';
//import { connect } from 'react-redux';
import StuffList from './components/stuffList';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SecondComponent />
      </header>
      <div className="TitleBar">
        <h2 className="Title">Select A User</h2>
        <h4 className="Subtitle">*Users Compiled With Redux</h4>
      </div>
      <StuffList />
      <FirstComponent displaytext="This Is A React.js Component!"/>
    </div>
  );
}

export default App;
