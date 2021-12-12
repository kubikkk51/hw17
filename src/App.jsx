import React from 'react';
import Nav from './components/Nav/Nav';
import Posts from './components/Posts/Posts';
import Contacts from './components/Contacts/Contacts';
import Main from './components/Main/Main';
import Photos from './components/Photos/Photos';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <div>
          <Routes>
                <Route exact path='/hw17/feed/' element={<Posts />} />
                <Route exact path='/hw17/contacts' element={<Contacts />} />
                <Route exact path='/hw17/main' element={<Main />} />
                <Route exact path='/hw17/photos' element={<Photos />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;