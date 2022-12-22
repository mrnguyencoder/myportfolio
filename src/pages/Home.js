import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiChevronUp } from 'react-icons/fi';
import { FcAbout, FcAssistant, FcHome, FcNews } from "react-icons/fc";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Icon from '../assets/iconnguyencoder.png';
import { Disclosure } from '@headlessui/react';
import { SiCss3, SiExpress, SiFirebase, SiFreecodecamp, SiGithub, SiGraphql, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiNodemon, SiPhp, SiPhpmyadmin, SiReact, SiTailwindcss, SiVsco } from "react-icons/si";




function Home() {
  const [text ] = useTypewriter({
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
          <a href="" rel='noreferrer' className="flex flex-col justify-center items-center gap-2 pb-5"> <FcNews className='text-3xl' />Projects</a>
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
          <h1 className="text-3xl text-center text-blue-800 mb-4 ">
          Nguyen Coder | Software Developer 
          </h1>
          <p className="text-xl text-center text-blue-600 mb-4 font-[Poppins]">
          Welcome to my portfolio website! Here you can find out more about me, my skills and the projects I've worked on.
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
              <p>What I can do?</p>
              <FiChevronUp className={`${
                    open ? 'rotate-180 transform' : ''
                  } text-3xl text-green-500`}/>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 p-4">
              I create and maintain websites. I am also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, I may create content for the site.
            </Disclosure.Panel>
          </>
            )}
          </Disclosure>

          <Disclosure>
          {({ open }) => (
          <>
            <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-sky-100 px-4 py-2 text-left text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
              <p>How I build a web app ?</p>
              <FiChevronUp className={`${
                    open ? 'rotate-180 transform' : ''
                  } text-3xl text-green-500`}/>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 p-4">
              <p>VS code, GitHub</p>
              <p>HTML5, CSS3- Tailwind , JavaScrips - React</p>
              <p>Basic MERN stack MongoDB, Express, React, Node </p>
              <p>Knowledge of MySQL,PostgreSQL </p>
            </Disclosure.Panel>
          </>
            )}
          </Disclosure>

          <Disclosure>
          {({ open }) => (
          <>
            <Disclosure.Button className="mt-3 flex w-full justify-between rounded-lg bg-sky-100 px-4 py-2 text-left text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
              <p>Why me?</p>
              <FiChevronUp className={`${
                    open ? 'rotate-180 transform' : ''
                  } text-3xl text-green-500`}/>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 p-4">
              <p>Yes, there are a tons of huge developer in the market</p>
              <p>Let contact me first then we can figure out how we can work together!</p>
            </Disclosure.Panel>
          </>
            )}
          </Disclosure>


          </div>
          
        </div>

        <div className="m-3 p-6 shadow-md rounded-xl ">
          <div className="">
            <p className="text-xl text-blue-400">My Skills:</p>
            <div className=""></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-4 gap-16
                            cursor-pointer text-6xl
                            ">
              <SiHtml5 className='text-[#e34c26]' />
              <SiCss3 className='text-[#264de4]'/>
              <SiJavascript className='text-[#F0DB4F]'/>
              <SiReact className='text-[#61DBFB]'/>
              <SiGithub className='text-[#171515]'/>
              <SiTailwindcss className='text-[#00b8d7]'/>
              <SiGraphql className='text-[#e535ab]'/>
              <SiFirebase className='text-[#FFA611]'/>
              <SiMysql className='text-[#00758f]'/>
              <SiNodedotjs className='text-[#215732]'/>
              <SiFreecodecamp className='text-[#006400]'/>
              <SiMongodb className='text-[#589636]'/>
            </div>
          </div>
        </div>

          
      </div>

        



      </div>  

   
  )
}

export default Home