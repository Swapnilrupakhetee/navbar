import {FaBars,FaTimes} from 'react-icons/fa';
import React from 'react'
import { useRef } from 'react';
import'../src/Navbar.css';

function Navbar() {
    const navRef = useRef();
    const showNavbar = ()=>
    {
        navRef.current.classList.toggle('responsive_nav');
    }
  return (
    <header>
        <h3>Logo</h3>
        <nav  className="navs" ref={navRef}>
            <a href='#'>Home</a>
            <a href='#'>Shop</a>
            <a href='#'>Contact</a>
            <a href='#'>About Me</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>

        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>

    </header>
  )
}

export default Navbar