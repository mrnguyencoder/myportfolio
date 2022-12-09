import React from 'react';
import { SiCss3, SiFirebase, SiGithub, SiGraphql, SiHtml5, SiJavascript, SiMysql, SiReact, SiTailwindcss } from "react-icons/si";


function About() {
  return (
    <div className='p-10 flex flex-col justify-center items-center'>
        <h2 className="text-4xl md:text-5xl text-center my-8 mx-4 tracking-wide
            text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]
            ">My skill
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-center">
                <SiHtml5 className='w-24 h-24 m-8 p-1 rounded-full' />
                <SiCss3 className='w-24 h-24 m-8 p-1 rounded-full'/>
                <SiTailwindcss className='w-24 h-24 m-8 p-1 rounded-full'/>
                <SiJavascript className='w-24 h-24 m-8 p-1 rounded-full'/>
                <SiReact className='w-24 h-24 m-8 p-1 rounded-full'/>
                <SiGithub className='w-24 h-24 m-8 p-1 rounded-full'/>
                <SiGraphql className='w-24 h-24 m-8 p-1 rounded-full'/>
                <SiFirebase className='w-24 h-24 m-8 p-1 rounded-full'/>
                <SiMysql className='w-24 h-24 m-8 p-1 rounded-full'/>
        </div>
    </div>
  )
}

export default About