import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/textnguyencoder.png';



function Navbar() {
  return (
    <div className=''>
        <Link className="logo" to="/">
            <img src={Logo} alt="logo nguyen coder" />
        </Link>
        <div className="links">
            <Link className="link" >Home</Link>
            <Link className="link" to="/projects">Projects</Link>
            <Link className="link" to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar