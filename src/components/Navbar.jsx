import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/textnguyencoder.png';

const style = {
    navbar:`
    bg-green-400 shadow`,
    logo: `
    `
}

function Navbar() {
  return (
    <nav className={style.navbar}>
        <Link className={style.logo} to="/">
            <img src={Logo} alt="logo nguyen coder" />
        </Link>
        <div className={style.links}>
            <Link className="link" >Home</Link>
            <Link className="link" to="/projects">Projects</Link>
            <Link className="link" to="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar