import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiChevronUp } from 'react-icons/fi';
import { FcAbout, FcAssistant, FcHome, FcNews } from "react-icons/fc";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Icon from '../assets/iconnguyencoder.png';
import { Disclosure } from '@headlessui/react';




function Home() {
  const [text, count ] = useTypewriter({
    words: [
      'Vietnamese dev in Paris  ',
      'JavaScript, React and more...',
      '<happy coding>',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='flex w-full h-screen '>
      
      {/* nav sidebar from medium min-width 768px breakpoints */}
      <div className="hidden w-[8%] m-3 md:flex flex-col items-center justify-evenly">
        <div className="">
          <a href="" rel='noreferrer' className="flex flex-col justify-center items-center gap-2 pb-5"> <FcHome className='text-3xl' />Home</a>
          <a href="" rel='noreferrer' className="flex flex-col justify-center items-center gap-2 pb-5"> <FcAbout className='text-3xl' />About</a>
          <a href="" rel='noreferrer' className="flex flex-col justify-center items-center gap-2 pb-5"> <FcNews className='text-3xl' />Blog</a>
          <a href="" rel='noreferrer' className="flex flex-col justify-center items-center gap-2"> <FcAssistant className='text-3xl' />Contact</a>
        </div>

        <div className="text-2xl flex flex-col gap-5">
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
              className="text-[#171515] hover:text-[#61dbfb]"
            >
              <FiGithub className=""></FiGithub>
            </a>
            <a
              href="https://www.instagram.com/mrnguyencoder/"
              rel='noreferrer' target="_blank"
              className="text-[#962fbf] hover:text-[#61dbfb]"
            >
              <FiInstagram className=""></FiInstagram>
            </a>    
        </div>
      </div>

      {/* main right home  */}
      <div className="w-full md:w-[92%] ">

        <div className="bg-gradient-to-r from-[#61dbfb] to-[#f0db4f]
                        m-3 p-6 shadow-md rounded-xl
        ">
          <p className="text-5xl text-[#3C873A] font-bold text-center mb-6">Welcome to My Site</p>
          <p className="text-3xl text-center text-blue-800 mb-4 ">
            Front-end Dev 
          </p>
          <p className="text-xl text-center text-blue-600 mb-4 font-[Poppins]">
            Base in Paris, make code with love
          </p>
        </div>

        <div className="m-3 p-6 shadow-md rounded-xl">
            <div className="flex flex-col justify-center items-center gap-4">
              <img src={Icon} alt="icon nguyencoder" className='h-20' />
              <p className="text-3xl text-sky-500 ">
              <span>{ text }</span>
              <Cursor cursorColor='#61dbfb' />
              </p>
            </div>
        </div>
        <div className="m-3 p-6 shadow-md rounded-xl">
          <div className='mx-auto w-full rounded-2xl bg-white p-2'>
          <Disclosure>
          {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-sky-100 px-4 py-2 text-left text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
              <p>What ?</p>
              <FiChevronUp className={`${
                    open ? 'rotate-180 transform' : ''
                  } text-3xl text-green-500`}/>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              Yes! You can purchase a license that you can share with your entire
              team.
            </Disclosure.Panel>
          </>
            )}
          </Disclosure>
          </div>
        </div>

          
      </div>

        



      </div>  

   
  )
}

export default Home