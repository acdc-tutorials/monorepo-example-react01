import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextInput } from 'react-monorepo-component-lib'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TextInput label="A friendly input field" placeholder="hello@example.com" />
        </header>
      </div>
    );
  }
}

export default App;
