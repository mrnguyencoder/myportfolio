import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div className=''>
        <div className="logo">
            <img src="" alt="" />
        </div>
        <div className="links">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/projects">Projects</Link>
            <Link className="link" to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar