import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'antd/lib/button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Nepalink Network Pvt.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
