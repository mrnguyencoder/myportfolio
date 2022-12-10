import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/textnguyencoder.png';
import { HiBars3BottomRight, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineCursorArrowRays, HiShoppingCart, HiXMark } from "react-icons/hi2";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const style = {
    navbar:`
    fixed w-full h-[64px] 
    flex justify-between items-center 
    px-4 bg-[#0a192f] text-gray-300`,
    logo: `
    w-36 md:42`,
    links: `
    hidden md:flex items-center
    `,
    link: `
    mx-3 md:mx-4 xl:mx-6
    text-sm text-white md:text-lg xl:text-xl  `,
}



function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

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
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <HiBars3BottomRight className='text-3xl' /> : <HiXMark className='text-3xl'/>}
        </div>
        {/* Mobile toggle menu */}
        <div className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }>
            <Link onClick={handleClick} className='flex text-4xl py-10' to="/about"><HiOutlineCursorArrowRays className='pr-2'/>About</Link>
            <Link onClick={handleClick} className='flex text-4xl py-10' to="/projects">Projects<HiShoppingCart className='pl-2'/></Link>
            <Link onClick={handleClick} className='flex text-4xl py-10' to="/contact">Contact<HiOutlineChatBubbleOvalLeftEllipsis className='pl-2'/></Link>

            <div className="flex text-6xl py-6 justify-between">
            <a className='px-4 text-amber-600' href="https://www" rel='noreferrer' target="_blank"><AiOutlineWhatsApp/></a>
            <a className='px-4 text-amber-600' href="https://www" rel='noreferrer' target="_blank"><AiOutlineInstagram/></a>
            <a className='px-4 text-amber-600' href="https://www" rel='noreferrer' target="_blank"><AiOutlineFacebook/></a>


            </div>
        </div>


    </nav>
  )
}

export default Navbar;