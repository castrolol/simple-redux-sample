import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FormularioPessoas from './FormularioPessoas';
import TablePessoas from './TablePessoas';
import AppHeader from './AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppHeader />
        <p className="App-intro">
          <FormularioPessoas />
          <hr />
          <TablePessoas />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
