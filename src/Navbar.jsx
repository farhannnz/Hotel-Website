import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className='navbar'>
        <div className="nav-logo">
          <h1>HungryHub</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/menu'>MENU</Link></li>
            <li><Link to='/order'>ORDER</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
          </ul>
        </div>
        <button onClick={toggleMenu} className='menu-button'>
          MENU
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={showMenu ? "phone-nav open" : "phone-nav"}>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/menu'>MENU</Link></li>
          <li><Link to='/order'>ORDER</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
