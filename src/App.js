import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemsPage from './components/ItemsPage';
import CharacterPage from './components/CharacterPage';

import './App.css';
import './Loader.css';
import amoo from './images/amoo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <img src={amoo} alt="logo for amoo xing" style={{paddingTop: `40px`}}/>
        <h1>Where amoos trik yew inta dooin thurr chores</h1>
        
        <Route path="/" exact component={ItemsPage}/>
        <Route path="/sellables" component={ItemsPage}/>
        <Route path="/villagers" component={CharacterPage}/>
        {/* <Route path="/registration" component={}/> */}
        {/* <Route path="/login" component={}/> */}
        {/* <Route path="/profile" component ={}/> */}

        {/* footer here */}
      </div>
    </Router>
  );
}

export default App;
