// // import React from 'react';
// // import { Navbar, Nav, Button } from 'react-bootstrap';
// // import './NavBar.css'; // Create the Navbar.css file for custom styles

// // const NavbarComponent = () => {
// //   return (
// //     <Navbar expand="lg" className="custom-navbar">
// //       <Navbar.Brand href="/">
// //         <img
// //           src="https://example.com/logo.png" // Replace with your logo image URL
// //           alt="Logo"
// //           className="logo"
// //         />
// //       </Navbar.Brand>
// //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //       <Navbar.Collapse id="basic-navbar-nav">
// //         <Nav className="ml-auto">
// //           <Nav.Link to="/">Home</Nav.Link>
// //           <Nav.Link to="/about">About</Nav.Link>
// //           <Nav.Link to="/portfolio">Portfolio</Nav.Link>
// //           <Nav.Link to="/contact">Contact</Nav.Link>
// //         </Nav>
// //       </Navbar.Collapse>
// //     </Navbar>
// //   );
// // };

// // export default NavbarComponent;
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css'; 
// // import pro from './pro.png'
// // import { Menu } from '@mui/icons-material';
// // import MaterialIcon from 'react-google-material-icons';
// import {useSelector} from 'react-redux';

// function NavBar() {
//     const user =useSelector(state => state.user.value)
//     console.log(user);
//     return (
//       <nav className='nav'>

//         <ul className="navbar">

//           <li>
//             <NavLink exact to="/wishlist" activeClassName="active">Wishlist</NavLink>
//           </li>
//           <li>
//             <NavLink to="/yours" activeClassName="active">Yours</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" activeClassName="active">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/profile" activeClassName="active">Profile</NavLink>
//           </li>
//           <h3 className='nav-profile-name'>{user.name}</h3>
//         </ul>
//       </nav>
//     );

// }

// export default NavBar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userReducer';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Perform the search action here using the `searchTerm` state
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="button" className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
export default SearchBar;

export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="mainH">
          MakeFolio
        </Link>
      </div>
      <div className="navOpt">
        <Link to="/login" className="mainH">
          Login
        </Link>
        <Link to="/signUp" className="mainH">
          SignUp
        </Link>
     </div>
    </div>
  );
};



export const MainNav = () => {
  const user = useSelector(selectUser);
  console.log({user});

  return (
    <div className="navbar">
     
        <Link to="/" className="navbarh">MakeFolio</Link>
          <SearchBar/>
          {/* <Link to="/wishlist" className='navbarh'>Wishlist</Link> */}
          <Link to="/about" className='navbarh'>About</Link>
          <Link to="/yours" className='navbarh'>Yours</Link>
          <Link to='/profile' className='navbarh'>a@gmail.com</Link>
          {/* <Link to="/profile" className='navbarh'>profile
          </Link> */}
          <Link to='/' className='navbarh'>Logout</Link>
    </div>
  );
};

