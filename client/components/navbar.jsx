import React from 'react';

export default function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img className='logo' src='images/logo.png' alt='logo'/>
      </div>
      <div className='navbar-buttons'>
        <a className='nav-button' id='nav-button-1'>Home</a>
        <a className='nav-button' id='nav-button-2'>Home</a>
        <a className='nav-button' id='nav-button-3'>Home</a>
      </div>
    </div>
  );
}
