import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/textnguyencoder.png';

const style = {
    navbar:`
    bg-neutral-700 p-3 shadow
    flex items-center justify-between`,
    logo: `
    min-h-8 max-h-16`,
    links: `
    flex items-center
    `,
    link: `
    mx-3 md:mx-4 xl:mx-6
    text-sm text-white md:text-lg xl:text-xl  `,
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