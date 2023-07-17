import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar';
import t from '../images/user.png';
// import {CDropdown,CDropdownItem,CDropdownMenu,CDropdownToggle,CDropdownDivider} from 'reactstrap';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img src={t} onClick={handleDropdown}/>
      {isOpen && (
        <ul>
          <Link to='/profile' className='l'><li>Profile</li></Link>
          <Link to='/login' className='l'><li>Logout</li></Link>
        </ul>
      )}
    </div>
  );
};

const MainNav = () => {
  return (
    <div className="navbar">
     
        <Link to="/" className="navbarh">MakeFolio</Link>
        <SearchBar/>
          <Link to="/wishlist" className='navbarh'>Wishlist</Link>
          <Link to="/cart" className='navbarh'>About</Link>
          {/* <Link to="/profile" className='navbar' ><img src={t}/></Link> */}
          <Link to="/Yours" className='navbarh'>Yours</Link>
          <Dropdown/>
    </div>

  );
};

export default MainNav;