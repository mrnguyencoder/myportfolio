import React from 'react'

function Projects() {
  return (
    <section className="font-[Poppins]">
      <div className="container mx-auto">
        <h2 className="text-4xl text-amber-400 underline py-8 text-center">Projects</h2>
        <div className="flex">

          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-[#61dbfb] mb-4">Project 1</h3>
              <p className="text-gray-700 mb-4">
                <p>Name: Une main Tendue</p>
                <p>Used: HTML5, CSS, JavaScript</p>
                <p>Plus: CEO</p>
              </p>
              <div className="flex justify-between">
                <a
                  href="https://unemaintendue-conseils.fr/"
                  className="animate-bounce inline-block py-2 px-4 rounded bg-indigo-500 text-white font-bold hover:bg-indigo-600"
                >
                  Live demo
                </a>
                <a
                  href="#"
                  className="inline-block py-2 px-4 rounded border border-slate-300 hover:border-slate-400 "
                >
                  Source code
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl text-[#61dbfb] mb-4">Project 2</h3>
              <p className="text-gray-700 mb-4">
              <p>Name: Nguyen coder</p>
                <p>Used: React</p>
                <p>Dependencies: framer-motion,router-dom,simple-typewriter,icons</p>
              </p>
              <div className="flex justify-between">
                <a
                  href="https://github.com/mrnguyencoder/myportfolio"
                  className="inline-block py-2 px-4 rounded border border-slate-300 hover:border-slate-400 "
                >
                  Source code
                </a>
                <a
                  href="#"
                  className="animate-bounce inline-block py-2 px-4 rounded bg-indigo-500 text-white font-bold hover:bg-indigo-600"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  )
}

export default Projects