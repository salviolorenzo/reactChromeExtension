import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import Login from './Login';
import shortLogo from './images/s-o-logo.png';
import lrgLogo from './images/s-o-logo-long.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogin(event) {
    event.preventDefault();
    const userName = event.target.username.value;
    const pw = event.target.password.value;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <img src={lrgLogo} alt="Main Logo" />
          </header>
          <Route
            path="/login"
            exact
            render={props => {
              return (
                <Login
                  handleLogin={event => {
                    this.handleLogin(event);
                  }}
                  {...this.props}
                />
              );
            }}
          />
          <Route path="/home" exact component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
