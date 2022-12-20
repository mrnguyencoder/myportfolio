import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import { FcAbout, FcAssistant, FcHome, FcNews } from "react-icons/fc";


function Home() {
  return (
    <div className='flex w-full h-screen'>
      
      {/* nav sidebar from medium min-width 768px breakpoints */}
      <div className="hidden w-[8%] m-3 md:flex flex-col items-center justify-evenly">
        <div className="">
          <a href="#" rel='noreferrer' className="flex flex-col justify-center items-center gap-2 pb-5"> <FcHome className='text-3xl' />Home</a>
          <a href="#" rel='noreferrer' className="flex flex-col justify-center items-center gap-2 pb-5"> <FcAbout className='text-3xl' />About</a>
          <a href="#" rel='noreferrer' className="flex flex-col justify-center items-center gap-2 pb-5"> <FcNews className='text-3xl' />Blog</a>
          <a href="#" rel='noreferrer' className="flex flex-col justify-center items-center gap-2"> <FcAssistant className='text-3xl' />Contact</a>
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

        <div className="container
                        bg-gradient-to-r from-[#61dbfb] to-[#f0db4f]
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

        <div className="">
        
        </div>



      </div>  
    </div>

  //   <div className="flex flex-col min-h-screen bg-gray-200">
  //   <header className="bg-white flex items-center justify-between p-4">
  //     <div className="text-xl font-bold">My Portfolio</div>
  //     <nav className="flex items-center">
  //       <a className="mx-2 text-gray-700 hover:text-gray-900" href="#">Home</a>
  //       <a className="mx-2 text-gray-700 hover:text-gray-900" href="#">About</a>
  //       <a className="mx-2 text-gray-700 hover:text-gray-900" href="#">Projects</a>
  //       <a className="mx-2 text-gray-700 hover:text-gray-900" href="#">Contact</a>
  //     </nav>
  //   </header>
  //   <main className="container mx-auto px-4 mt-8">
  //     <div className="flex flex-col items-center">
  //       <img className="w-32 h-32 rounded-full mb-4" src="https://via.placeholder.com/150" alt="Profile picture" />
  //       <h1 className="text-3xl font-bold mb-2">John Doe</h1>
  //       <p className="text-xl text-gray-700 mb-8">Software Developer</p>
  //       <p className="text-lg text-gray-700 mb-8">Welcome to my portfolio website! Here you can find out more about me, my skills and experience, and the projects I've worked on.</p>
  //     </div>
  //   </main>
  //   <footer className="bg-white py-4 mt-8">
  //     <div className="container mx-auto px-4 text-center text-gray-700">
  //       &copy; 2021 John Doe. All rights reserved.
  //     </div>
  //   </footer>
  // </div>
  )
}

export default Home