import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
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
        
        <Routes>
          <Route path="/" element={<ItemsPage/>}/>
          <Route path="/sellables" element={<ItemsPage/>}/>
          <Route path="/villagers" element={<CharacterPage/>}/>
          {/* <Route path="/registration" element={}/> */}
          {/* <Route path="/login" element={}/> */}
          {/* <Route path="/profile" element ={}/> */}
        </Routes>

        {/* footer here */}
      </div>
    </Router>
  );
}

export default App;
