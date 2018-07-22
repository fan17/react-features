import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import RenderProps from './renderProps/RenderPropsIndex';
import Hoc from './hoc/HocIndex';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React features</h1>
          </header>
          <nav>
            <Link to="/render-props">RenderProps</Link>
            &nbsp;|&nbsp;
            <Link to="/hoc">Hoc</Link>
          </nav>
          <div>
            <Route exact path="/render-props" component={RenderProps}/>
            <Route path="/hoc" component={Hoc}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
