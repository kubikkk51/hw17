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
                <Route exact path='/feed' element={<Posts />} />
                <Route exact path='/contacts' element={<Contacts />} />
                <Route exact path='/main' element={<Main />} />
                <Route exact path='/photos' element={<Photos />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;