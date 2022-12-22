import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/textnguyencoder.png';
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";



function Navbar() {


  return (
    <nav className="w-full h-[64px] 
    flex justify-between items-center 
    px-4 bg-slate-800 text-gray-300">
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5,
            }}
        >
            <Link to="/">
                <img className="w-36 md:w-42" src={Logo} alt="logo nguyen coder" />
            </Link>
        </motion.div>
        <motion.div className="flex items-center"
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5,
            }}
        >
            <Link className="mx-3 md:mx-4 xl:mx-6
                            hover-text-blue-400
                            text-sm text-white md:text-lg xl:text-xl" to="/">Home</Link>
            <Link className="mx-3 md:mx-4 xl:mx-6
                            hover-text-blue-400
                            text-sm text-white md:text-lg xl:text-xl" to="/projects">Projects</Link>
            <Link className="mx-3 md:mx-4 xl:mx-6
                            hover-text-blue-400
                            text-sm text-white md:text-lg xl:text-xl" to="/contact">Contact</Link>
        </motion.div>

    </nav>
  )
}

export default Navbar;