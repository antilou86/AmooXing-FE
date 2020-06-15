import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import ItemsList from './components/ItemsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>AmooXing: Where amoos trik yew inta dooin they chores.</h1>
        {/*NavBar component here*/}
        <Switch>
              <Route exact path="/" component={ItemsList}/>
              {/* <Route path="/registration" component={}/> */}
              {/* <Route path="/login" component={}/> */}
              <Route path="/sellables" component={ItemsList}/>
              {/* <Route path="/profile" component ={}/> */}
        </Switch>
        {/* footer here */}
      </div>
    </Router>
  );
}

export default App;
