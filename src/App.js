import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import SearchForm from './components/SearchForm';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{backgroundColor: `rgba(150, 205, 255, 1)`}}>
        <h1>AmooXing: Where amoos trik yew inta dooin they chores.</h1>
        {/*NavBar component here*/}
        <Switch>
              <Route exact path="/" component={SearchForm}/>
              {/* <Route path="/registration" component={}/> */}
              {/* <Route path="/login" component={}/> */}
              <Route path="/sellables" component={SearchForm}/>
              {/* <Route path="/profile" component ={}/> */}
        </Switch>
        {/* footer here */}
      </div>
    </Router>
  );
}

export default App;
