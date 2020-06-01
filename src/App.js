import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React or whatever
          </a>
        </header>
        <Switch>
              <Route exact path="/" component={}/>
              <Route path="/registration" component={}/>
              <Route path="/login" component={}/>
              <Route path="/sellables" component={}/>
              <Route path="/profile" component ={}/>
        </Switch>
        {/* footer here */}
      </div>
    </Router>
  );
}

export default App;
