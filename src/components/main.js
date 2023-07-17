import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './navbar';
// import SearchBar from './searchbar';
import MainNav from './mainNav';
import Template from './templates';

const MainPage = () => {
  return (
    <div>
       <MainNav/>
      <div className="main-content">
        <Template/>
      </div>
    </div>
  );
};

export default MainPage;
