import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiBox  } from 'react-icons/fi';
import icon from '../assets/iconnguyencoder.png'


function Home() {
  return (
    <section className='w-full h-screen text-center flex flex-col items-center justify-center px-4 ms:px-8 xl:px-12'>
        <h2 className="text-4xl sm:text-6xl py-4 
                        text-transparent font-bold bg-clip-text
                        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Hello World
            <span class="animate-wave inline-block origin-[70%_70%]">👋</span>
        </h2>
        <p className='text-orange-300'>Hi, my nick name is Nguyen coder</p>
        <h3 className="text-3xl md:ext-5xl py-4
                        bg-gradient-to-r from-yellow-300 to-sky-400
                        text-transparent bg-clip-text">
            JavaScript Developer
        </h3>
        <p className="text-2xl md:text-3xl py-5 text-teal-400 leading-7">Based in Paris, I have been coding for 1 years. Let's contact me and talk about your request</p>
        <div className="text-3xl flex justify-center gap-12 py-3 text-red-500">
            <FiLinkedin />
            <FiGithub />
            <FiInstagram />
            <FiBox />
        </div>
        <img className="mx-auto p-6 max-h-40" src={icon} alt="logo nguyen coder" />   
    </section>
  )
}

export default Home