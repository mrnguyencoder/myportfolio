import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/textnguyencoder.png';

const style = {
    navbar:`
    bg-green-400 p-5 shadow
    flex items-center justify-between`,
    logo: `
    h-10 inline`,
    links: `
    flex items-center
    `,
    link: `
    mx-4
    text-xl hover-cyan-500 duration-500`,
}

function Navbar() {
  return (
    <nav className={style.navbar}>
        <div>
            <Link to="/">
                <img className={style.logo} src={Logo} alt="logo nguyen coder" />
            </Link>
        </div>
        <div className={style.links}>
            <Link className={style.link} to="/about">About</Link>
            <Link className={style.link} to="/projects">Projects</Link>
            <Link className={style.link} to="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar