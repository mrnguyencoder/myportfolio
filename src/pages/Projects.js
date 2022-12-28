import React from 'react';
import Project1 from '../assets/pj1.png';
import Project2 from '../assets/pj2.png';
import Project3 from '../assets/pj3.png';

function Projects() {
  return (
    <section className="font-[Poppins]">
      <div className="px-8 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-4xl text-[#61dbfb] pt-8 pb-6 text-center">Projects</h2>
        <div className="flex justify-center pb-9">
          <div className="border-4 border-blue-600 w-20"></div>
          <div className="border-4 border-slate-50 w-20"></div>
          <div className="border-4 border-red-600 w-20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* project1 */}
          <div className="border bg-slate-50 m-3 shadow-md flex flex-col justify-between">
            <div className="flex flex-col items-center p-8 space-y-5">
              <h3 className="text-3xl text-green-800 font-semibold">Une main Tendue</h3>
              <div className="text-slate-800 text-base flex flex-col items-center">
                  <p>HTML5, CSS, JavaScript</p>
                  <p>CEO, Search Console, Google Business Profile</p>
              </div>
              <div className="flex justify-between gap-10">
                <a
                  href="https://unemaintendue-conseils.fr/"
                  rel='noreferrer' target="_blank"
                  className="animate-pulse py-2 px-4 rounded-full border border-orange-500 font-bold hover:border-orange-700"
                  >
                  Live demo
                </a>
                <a
                  href="https://github.com/mrnguyencoder/unemaintendue-conseils.fr"
                  rel='noreferrer' target="_blank"
                  className="py-2 px-4 rounded-full border border-slate-300 hover:border-slate-400 "
                  >
                  Source code
                </a>
              </div>
            </div>
            <div className="">
            <img className='w-full ' src={Project1} alt="nguyen coder project" />
            </div>
          </div>




          {/* <div className="">
            
              <div className="rounded-lg shadow-md p-6">
                <h3 className="text-2xl text-[#61dbfb] mb-4">Project 1</h3>
                <p className="text-gray-700 my-6 space-y-1">
                  <p>Name: Une main Tendue</p>
                  <p>Used: HTML5, CSS, JavaScript</p>
                  <p>Plus: CEO, google map, </p>
                </p>
                <div className="flex justify-between">
                  <a
                    href="https://unemaintendue-conseils.fr/"
                    rel='noreferrer' target="_blank"
                    className="animate-pulse py-2 px-4 rounded bg-indigo-500 text-white font-bold hover:bg-indigo-600"
                  >
                    Live demo
                  </a>
                  <a
                    href="https://github.com/mrnguyencoder/unemaintendue-conseils.fr"
                    rel='noreferrer' target="_blank"
                    className="py-2 px-4 rounded border border-slate-300 hover:border-slate-400 "
                  >
                    Source code
                  </a>
                </div>
                <div>
                  <img src={Project1} alt="nguyen coder project" />
                </div>

              </div>
            
          </div>

          <div className="">
            <div className="rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-[#61dbfb] mb-4">Project 2</h3>
              <p className="text-gray-700 my-6 space-y-1">
              <p>Name: Nguyen coder</p>
                <p>Used: React</p>
                <p>Dependencies: framer-motion, router-dom, simple-typewriter, icons</p>
              </p>
              <div className="flex justify-between">
                <a
                  href="https://github.com/mrnguyencoder/myportfolio"
                  rel='noreferrer' target="_blank"
                  className="py-2 px-4 rounded border border-slate-300 hover:border-slate-400 "
                >
                  Source code
                </a>
                <a
                  href="https://nguyencoder.com/"
                  rel='noreferrer' target="_blank"
                  className="animate-pulse py-2 px-4 rounded bg-indigo-500 text-white font-bold hover:bg-indigo-600"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div> */}



        </div>
      </div>
    </section>

    
  )
}

export default Projects