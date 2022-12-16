import React from 'react';
import { SiCss3, SiFirebase, SiGithub, SiGraphql, SiHtml5, SiJavascript, SiMysql, SiReact, SiTailwindcss } from "react-icons/si";
import { HiChevronDoubleDown } from 'react-icons/hi2';
import { motion } from 'framer-motion';


function About() {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{ opacity: 1 }}
      transition={{duration:1.5}}
      className='p-8'
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="">
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]
            text-2xl text-center py-8">5 W's and H Questions</p>
            <div className="relative overflow-hidden">
              <input type="checkbox"
                     className='peer
                                absolute top-0 inset-x-0 w-full
                                h-12 z-10 cursor-pointer
                                opacity-0' />
              <div className="h-12 w-full flex items-center">
                <p className="text-lg">What can I do for you?</p>
              </div>
              <div className="absolute top-3 right-3 text-blue-500 text-3xl
                              transition-transform duration-500
                              rotate-0
                              peer-checked:rotate-180">
                <HiChevronDoubleDown />
              </div>
              <div className="overflow-hidden transition-all duration-500
                              max-h-0
                              peer-checked:max-h-40">
                <div className="p-4">
                  <p className="">Lorem!</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <input type="checkbox"
                     className='peer
                                absolute top-0 inset-x-0 w-full
                                h-12 z-10 cursor-pointer
                                opacity-0' />
              <div className="h-12 w-full flex items-center">
                <p className="text-lg">Why me?</p>
              </div>
              <div className="absolute top-3 right-3 text-blue-500 text-3xl
                              transition-transform duration-500
                              rotate-0
                              peer-checked:rotate-180">
                <HiChevronDoubleDown />
              </div>
              <div className="overflow-hidden transition-all duration-500
                              max-h-0
                              peer-checked:max-h-80">
                <div className="p-4">
                  <p className="">Lorem,!</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <input type="checkbox"
                     className='peer
                                absolute top-0 inset-x-0 w-full
                                h-12 z-10 cursor-pointer
                                opacity-0' />
              <div className="h-12 w-full flex items-center">
                <p className="text-lg">When I start do coding?</p>
              </div>
              <div className="absolute top-3 right-3 text-blue-500 text-3xl
                              transition-transform duration-500
                              rotate-0
                              peer-checked:rotate-180">
                <HiChevronDoubleDown />
              </div>
              <div className="overflow-hidden transition-all duration-500
                              max-h-0
                              peer-checked:max-h-80">
                <div className="p-4">
                  <p className="">Lorem,!</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <input type="checkbox"
                     className='peer
                                absolute top-0 inset-x-0 w-full
                                h-12 z-10 cursor-pointer
                                opacity-0' />
              <div className="h-12 w-full flex items-center">
                <p className="text-lg">Where? Office or at home?</p>
              </div>
              <div className="absolute top-3 right-3 text-blue-500 text-3xl
                              transition-transform duration-500
                              rotate-0
                              peer-checked:rotate-180">
                <HiChevronDoubleDown />
              </div>
              <div className="overflow-hidden transition-all duration-500
                              max-h-0
                              peer-checked:max-h-80">
                <div className="p-4">
                  <p className="">Lorem,!</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <input type="checkbox"
                     className='peer
                                absolute top-0 inset-x-0 w-full
                                h-12 z-10 cursor-pointer
                                opacity-0' />
              <div className="h-12 w-full flex items-center">
                <p className="text-lg">Who am I?</p>
              </div>
              <div className="absolute top-3 right-3 text-blue-500 text-3xl
                              transition-transform duration-500
                              rotate-0
                              peer-checked:rotate-180">
                <HiChevronDoubleDown />
              </div>
              <div className="overflow-hidden transition-all duration-500
                              max-h-0
                              peer-checked:max-h-80">
                <div className="p-4">
                  <p className="">Lorem,!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] to-[#ff00c6]
            text-2xl text-center py-8">Skills</p>
              <div className="grid grid-cols-4 gap-5 group cursor-pointer ">
                <SiHtml5 className='w-24 h-24 rounded-full border-gray-500 object-cover filter group-hover:grayscale' />
                <SiCss3 className=''/>
                <SiTailwindcss className=''/>
                <SiJavascript className=''/>
                <SiReact className=''/>
                <SiGithub className=''/>
                <SiGraphql className=''/>
                <SiFirebase className=''/>
                <SiMysql className=''/>
              </div>
          </div>
        </div>
    </motion.div>
  )
}

export default About