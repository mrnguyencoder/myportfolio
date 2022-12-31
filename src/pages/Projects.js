import React from 'react';
import Project1 from '../assets/pj1.png';
import Project2 from '../assets/pj2.png';
import Project3 from '../assets/pj3.png';
import Project4 from '../assets/pj4.png';

function Projects() {
  return (
    <section className="font-[Poppins]">
      <div className="px-2 md:px-4 lg:px-20">
        <h2 className="text-4xl md:text-4xl text-[#61dbfb] pt-8 pb-6 text-center">Projects</h2>
        <div className="flex justify-center pb-9">
          <div className="border-4 border-blue-600 w-20"></div>
          <div className="border-4 border-slate-50 w-20"></div>
          <div className="border-4 border-red-600 w-20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* project1 */}
          <div className="border bg-slate-50 m-3 shadow-md flex flex-col justify-between">
            <div className="flex flex-col items-center p-6 space-y-5 text-center">
              <h3 className="text-3xl text-green-800 font-semibold">Une main Tendue</h3>
              <div className="text-slate-800 text-base">
                  <p>HTML5, CSS, JavaScript</p>
                  <p>CEO, Search Console, Google Business Profile</p>
              </div>
              <div className="flex justify-between text-xs gap-10">
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
{/* project2 */}
          <div className="border bg-slate-50 m-3 shadow-md flex flex-col justify-between">
            <div className="flex flex-col items-center p-6 space-y-5 text-center">
              <h3 className="text-3xl text-green-800 font-semibold">Portfolio </h3>
              <div className="text-slate-800 text-base">
                  <p>React, Tailwind</p>
                  <p>framer-motion, router-dom, hook-form, simple-typewriter, icons</p>
              </div>
              <div className="flex justify-between gap-10 text-xs">
                <a
                  href="https://nguyencoder.com/"
                  rel='noreferrer' target="_blank"
                  className="animate-pulse py-2 px-4 rounded-full border border-orange-500 font-bold hover:border-orange-700"
                  >
                  Live demo
                </a>
                <a
                  href="https://github.com/mrnguyencoder/myportfolio"
                  rel='noreferrer' target="_blank"
                  className="py-2 px-4 rounded-full border border-slate-300 hover:border-slate-400 "
                  >
                  Source code
                </a>
              </div>
            </div>
            <div className="">
            <img className='w-full ' src={Project2} alt="nguyen coder project" />
            </div>
          </div>
{/* project3 */}
          <div className="border bg-slate-50 m-3 shadow-md flex flex-col justify-between">
            <div className="flex flex-col items-center p-8 space-y-5 text-center">
              <h3 className="text-3xl text-green-800 font-semibold">Clone pole-emploi.fr</h3>
              <div className="text-slate-800 text-base">
                  <p>React, Tailwind</p>
                  <p>headlessui</p>
              </div>
              <div className="flex justify-between gap-10 text-xs">
                <a
                  href="https://mrnguyencoder.github.io/clone-pole-emploi.fr/"
                  rel='noreferrer' target="_blank"
                  className="animate-pulse py-2 px-4 rounded-full border border-orange-500 font-bold hover:border-orange-700"
                  >
                  Live demo
                </a>
                <a
                  href="https://github.com/mrnguyencoder/clone-pole-emploi.fr"
                  rel='noreferrer' target="_blank"
                  className="py-2 px-4 rounded-full border border-slate-300 hover:border-slate-400 "
                  >
                  Source code
                </a>
              </div>
            </div>
            <div className="">
            <img className='w-full ' src={Project3} alt="nguyen coder project" />
            </div>
          </div>
{/* project4 */}
          <div className="border bg-slate-50 m-3 shadow-md flex flex-col justify-between">
            <div className="flex flex-col items-center p-8 space-y-5 text-center">
              <h3 className="text-3xl text-green-800 font-semibold">Journaliste web</h3>
              <div className="text-slate-800 text-base">
                  <p>React, Tailwind</p>
                  <p>Deploy netlify</p>
              </div>
              <div className="flex justify-between gap-10 text-xs">
                <a
                  href="https://sonia-rachline.netlify.app/"
                  rel='noreferrer' target="_blank"
                  className="animate-pulse py-2 px-4 rounded-full border border-orange-500 font-bold hover:border-orange-700"
                  >
                  Live demo
                </a>
                <a
                  href="https://github.com/mrnguyencoder/sonia-rachline.fr"
                  rel='noreferrer' target="_blank"
                  className="py-2 px-4 rounded-full border border-slate-300 hover:border-slate-400 "
                  >
                  Source code
                </a>
              </div>
            </div>
            <div className="">
            <img className='w-full ' src={Project4} alt="nguyen coder project" />
            </div>
          </div>

        </div>
      </div>
    </section>

    
  )
}

export default Projects