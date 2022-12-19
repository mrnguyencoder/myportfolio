import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import { FcAbout, FcAssistant, FcHome, FcNews } from "react-icons/fc";


function Home() {
  return (
    <div className='flex w-full h-screen'>
      <div className="hidden w-[8%] m-3 md:flex flex-col items-center justify-around">
        <p className="">
          <p className="flex flex-col justify-center items-center pb-5"> <FcHome className='text-3xl' />Home</p>
          <p className="flex flex-col justify-center items-center pb-5"> <FcAbout className='text-3xl' />About</p>
          <p className="flex flex-col justify-center items-center pb-5"> <FcNews className='text-3xl' />Blog</p>
          <p className="flex flex-col justify-center items-center"> <FcAssistant className='text-3xl' />Contact</p>
        </p>
        <p className="text-2xl ">
          <a
              href="https://www.linkedin.com/in/mr-nguyen-coder-27a744254/"
              rel='noreferrer' target="_blank"
              className="text-[#0e76a8] hover:text-[#61dbfb]"
            >
              <FiLinkedin className=""></FiLinkedin>
            </a>
            <a
              href="https://github.com/mrnguyencoder"
              rel='noreferrer' target="_blank"
              className="text-[#171515] hover:text-[#61dbfb] pb-5"
            >
              <FiGithub className=""></FiGithub>
            </a>
            <a
              href="https://www.instagram.com/mrnguyencoder/"
              rel='noreferrer' target="_blank"
              className="text-[#962fbf] hover:text-[#61dbfb] pb-5"
            >
              <FiInstagram className=""></FiInstagram>
            </a>    
        </p>
      </div>
      <div className="w-full md:w-[92%] ">
        <div className="container
                        bg-gradient-to-r from-[#61dbfb] to-[#f0db4f]
                        m-3 p-6 shadow-md rounded-xl
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

      </div>
          <div className="">
            <a className="bg-[#61dbfb] text-white font-bold py-2 px-4 rounded" href="mailto:mr.nguyencoder@gmail.com">Send me an email</a>
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