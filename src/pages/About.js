import React from 'react';
import { SiCss3, SiFirebase, SiGithub, SiGraphql, SiHtml5, SiJavascript, SiMysql, SiReact, SiTailwindcss } from "react-icons/si";
import { HiChevronDoubleDown } from 'react-icons/hi2';


function About() {
  return (
    <section className='p-8'>
        <h2 className="
            text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]
            text-2xl text-center
            my-8
            ">About me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <div className="relative overflow-hidden">
              <input type="checkbox"
                     className='peer
                                absolute top-0 inset-x-0 w-full
                                h-12 z-10 cursor-pointer
                                opacity-0' />
              <div className="bg-green-500 h-12 w-full flex items-center">
                <p className="text-lg">Why I become coder?</p>
              </div>
              <div className="absolute top-3 right-3 text-white text-3xl
                              transition-transform duration-500
                              rotate-0
                              peer-checked:rotate-180">
                <HiChevronDoubleDown />
              </div>
              <div className="overflow-hidden transition-all duration-500
                              max-h-0
                              peer-checked:max-h-40">
                <div className="p-4">
                  <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam perferendis suscipit, blanditiis laborum iure ad, saepe tempora dolor itaque cum incidunt voluptatibus iusto animi consequatur dolores aut neque pariatur dicta. Voluptatem blanditiis quaerat, nihil doloribus fuga repellendus provident maiores!</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <input type="checkbox"
                     className='peer
                                absolute top-0 inset-x-0 w-full
                                h-12 z-10 cursor-pointer
                                opacity-0' />
              <div className="bg-green-500 h-12 w-full flex items-center">
                <p className="text-lg">Why me?</p>
              </div>
              <div className="absolute top-3 right-3 text-white text-3xl
                              transition-transform duration-500
                              rotate-0
                              peer-checked:rotate-180">
                <HiChevronDoubleDown />
              </div>
              <div className="overflow-hidden transition-all duration-500
                              max-h-0
                              peer-checked:max-h-40">
                <div className="p-4">
                  <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam perferendis suscipit, blanditiis laborum iure ad, saepe tempora dolor itaque cum incidunt voluptatibus iusto animi consequatur dolores aut neque pariatur dicta. Voluptatem blanditiis quaerat, nihil doloribus fuga repellendus provident maiores!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-center">
                  <SiHtml5 className='text-6xl' />
                  <SiCss3 className='text-6xl'/>
                  <SiTailwindcss className='text-6xl'/>
                  <SiJavascript className='text-6xl'/>
                  <SiReact className='text-6xl'/>
                  <SiGithub className='text-6xl'/>
                  <SiGraphql className='text-6xl'/>
                  <SiFirebase className='text-6xl'/>
                  <SiMysql className='text-6xl'/>
          </div>
        </div>
    </section>
  )
}

export default About