import {FaBars,FaTimes} from 'react-icons/fa';
import React from 'react'

function Navbar() {
  return (
    <header>
        <h3>Logo</h3>
        <nav>
            <a href='#'>Home</a>
            <a href='#'>Shop</a>
            <a href='#'>Contact</a>
            <a href='#'>About Me</a>
            <button>
                <FaTimes/>
            </button>

        </nav>
        <button>
            <FaBars/>
        </button>

    </header>
  )
}

export default Navbar