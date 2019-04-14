import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import Login from './Login';
import shortLogo from './images/s-o-logo.png';
import lrgLogo from './images/s-o-logo-long.jpg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <img src={lrgLogo} alt="Main Logo" />
          </header>
          <Route path="/login" render={Login} />
          <Search />
        </div>
      </Router>
    );
  }
}

export default App;
