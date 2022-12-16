import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiBox  } from 'react-icons/fi';
import icon from '../assets/iconnguyencoder.png';


function Home() {
  return (
    <div className='flex w-full'>
      <div className="hidden w-[8%] m-3 md:flex flex-col items-center justify-around cursor-pointer border-b border-blue-500 hover:bg-gray-500">
        <p className="">Home</p>
        <p className="">Blog</p>
        <p className="">Skill</p>
      </div>
      <div className="w-[92%] m-3 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        <div className="p-6">
          <h1 className="text-2xl sm:text-6xl py-4
                         text-transparent font-bold bg-clip-text
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Nguyen Coder # JavaScript Dev
                <span class="animate-wave inline-block origin-[70%_70%]">👋</span>
          </h1>
            <p className='text-orange-300'>Base in Paris, make code with love</p>
            <p className="text-2xl md:text-3xl py-5 text-teal-400 leading-7">
              I have been coding for 1 years. Love to make a wed-app with personal request</p>
            <div className="text-xl flex justify-end gap-8 py-3 pr-3 text-emerald-300">
                <FiLinkedin />
                <FiGithub />
                <FiInstagram />
                <FiBox />
            </div>
        </div>
      </div>
      
      {/* <section className='w-full h-screen text-center flex flex-col items-center justify-center px-4 ms:px-8 xl:px-12'>
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
      <footer className='flex justify-between px-6 md:items-start items-center md:flex-row flex-col border-t-2 border-indigo-100'>
        <p className="text-lime-700 pt-5">© 2022 Nguyen Coder | All Rights Reserved</p>
        <div className="flex justify-center gap-4 py-5 text-lg text-cyan-600">
            <FiLinkedin />
            <FiGithub />
            <FiInstagram />
            <FiBox />
        </div>     
      </footer> */}
    </div>
  )
}

export default Home