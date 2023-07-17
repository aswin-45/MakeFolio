import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import SignUp from '../src/components /signUp';
import Login from '../src/components /login';
import Home from '../src/components /home';
import Navbar from './components /navbar';
import MainPage from './components /main';
import ProfilePage from './components /profile';
import Homepage from './components /homepage';
import Yours from './components /yours';

const App = () => {
  return (
    <Router>
        <div>
          <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/home" element={<MainPage></MainPage>} />
        {/* <Route path="/run" element={<Homepage/>} /> */}
        <Route path="/profile" element={<ProfilePage></ProfilePage>} />
        <Route path="/yours" element={<Yours></Yours>} />
        </Routes>
        </div>
    </Router>
  );
};

export default App;