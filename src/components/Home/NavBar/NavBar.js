import React from 'react';
import logo from '../../../assets/logos/Logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <img style={{height: '50px'}} src={logo} alt="" />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav  justify-content-between nav-link ml-auto align-items-md-center'>
            <Link to='/home' className='nav-link active'>
              Home
            </Link>
            <Link to='/about' className='nav-link'>
              About
            </Link>
            <Link to='/service' className='nav-link'>
              Service
            </Link>
            <Link to='/concerns' className='nav-link'>
              Concerns
            </Link>
            <Link to='/event' className='nav-link'>
              Event
            </Link>
            <Link to='/contact' className='nav-link'>
              Contact
            </Link>
            <Link to='/login' className='nav-link'>
            <button type='button' className='btn btn-dark w-100'>
                Login
            </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
