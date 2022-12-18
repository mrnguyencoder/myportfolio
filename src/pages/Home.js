import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiBox  } from 'react-icons/fi';
import { FcAbout, FcAssistant, FcHome, FcNews } from "react-icons/fc";


function Home() {
  return (
    <div className='flex w-full h-full'>
      <div className="hidden w-[8%] m-3 md:flex flex-col items-center justify-around border-b border-blue-500">
        <p className="flex flex-col justify-center items-center"> <FcHome />Home</p>
        <p className="flex flex-col justify-center items-center"> <FcAbout />About</p>
        <p className="flex flex-col justify-center items-center"> <FcNews />Blog</p>
        <p className="flex flex-col justify-center items-center"> <FcAssistant />Contact</p>
      </div>
      <div className="w-full md:w-[92%] ">
        <div className="m-3 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-6">
          <h1 className="text-2xl sm:text-6xl py-4
                         text-transparent font-bold bg-clip-text
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <span class="inline-flex">👋</span>Nguyen Coder     
          </h1>
            <p className='text-orange-300'>JavaScript Dev
              <span class="animate-bounce inline-flex">👋</span>
            </p>
            <p className="text-2xl md:text-3xl py-5 text-teal-400 leading-7">
            Base in Paris, make code with love</p>
            <div className="text-xl flex justify-end gap-8 py-3 pr-3 text-emerald-300">
                <FiLinkedin />
                <FiGithub />
                <FiInstagram />
                <FiBox />
            </div>
        </div>

        <div class="m-3 rounded-xl p-6 bg-gray-50">
          <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block">Ready to dive in?</span>
              <span class="block text-indigo-600">Start your free trial today.</span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div class="inline-flex rounded-md shadow">
                <p class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Get started</p>
              </div>
              <div class="ml-3 inline-flex rounded-md shadow">
                <p class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">Learn more</p>
              </div>
          </div>
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