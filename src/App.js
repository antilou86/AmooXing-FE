import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import ItemsPage from './components/ItemsPage';
import CharacterPage from './components/CharacterPage';

import './App.css';
import amoo from './images/amoo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <img src={amoo} alt="logo for amoo xing"/>
        <h1>Where amoos trik yew inta dooin thurr chores</h1>
        {/*NavBar component here*/}
        <Switch>
              <Route exact path="/" component={ItemsPage}/>
              {/* <Route path="/registration" component={}/> */}
              {/* <Route path="/login" component={}/> */}
              <Route path="/sellables" component={ItemsPage}/>
              <Route path="/villagers" component={CharacterPage}/>
              {/* <Route path="/profile" component ={}/> */}
        </Switch>
        {/* footer here */}
      </div>
    </Router>
  );
}

export default App;
