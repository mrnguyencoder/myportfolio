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
        <div className="container mx-auto
                        bg-gradient-to-r from-[#f0db4f] to-[#61dbfb]
                        m-3 p-6 shadow-md
        ">
          <p className="text-5xl text-[#3C873A] font-bold text-center mb-6">Welcome to My Site</p>
          <p className="text-3xl text-center text-blue-800 mb-4">
            Front-end Dev 
          </p>
          <p className="text-xl text-center text-blue-600 mb-4">
            Base in Paris, make code with love
          </p>

      <div className="container mx-auto py-6">
        <div className="flex justify-center mb-6">
     
          <a
            href="https://www.linkedin.com/in/mr-nguyen-coder-27a744254/"
            rel='noreferrer' target="_blank"
            className="text-[#0e76a8] hover:text-blue-500 mx-4"
          >
            <FiLinkedin className=""></FiLinkedin>
          </a>
          <a
            href="https://github.com/mrnguyencoder"
            rel='noreferrer' target="_blank"
            className="text-gray-700 hover:text-blue-500 mx-4"
          >
            <FiGithub className=""></FiGithub>
          </a>
          <a
            href="https://www.instagram.com/mrnguyencoder/"
            rel='noreferrer' target="_blank"
            className="text-gray-700 hover:text-blue-500 mx-4"
          >
            <FiInstagram className="text-3xl"></FiInstagram>
          </a>
        </div>
        <p className="text-gray-700 text-center mb-6">
          Or send me an email at <a className="text-blue-500" href="mailto:mr.nguyencoder@gmail.com">mr.nguyencoder@gmail.com</a>
        </p>
      </div>












          <div className="text-center">
            <button className="bg-[#61dbfb] hover:bg-[#3C873A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Learn More
            </button>
          </div>
        </div>

        <div className="m-3 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-6 shadow-md">
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

        <div className="m-3 rounded-xl p-6 bg-gray-50 shadow-md">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block text-indigo-600">Start to contact me</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <p className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Contact</p>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <p className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">Visite my portfilios</p>
              </div>
          </div>
        </div>
      </div>



    </div>
      
    </div>
  )
}

export default Home