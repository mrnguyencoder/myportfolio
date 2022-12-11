import React from 'react';
import { SiCss3, SiFirebase, SiGithub, SiGraphql, SiHtml5, SiJavascript, SiMysql, SiReact, SiTailwindcss } from "react-icons/si";


function About() {
  return (
    <section className='w-full h-screen text-center flex flex-col items-center justify-center px-4 ms:px-8 xl:px-12'>
        <h2 className="text-4xl md:text-5xl text-center my-8 mx-4 tracking-wide
            text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]
            ">My skill
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-center">
                <SiHtml5 className='w-24 h-24 m-6 p-1' />
                <SiCss3 className='w-24 h-24 m-6 p-1'/>
                <SiTailwindcss className='w-24 h-24 m-6 p-1'/>
                <SiJavascript className='w-24 h-24 m-6 p-1'/>
                <SiReact className='w-24 h-24 m-6 p-1'/>
                <SiGithub className='w-24 h-24 m-6 p-1'/>
                <SiGraphql className='w-24 h-24 m-6 p-1'/>
                <SiFirebase className='w-24 h-24 m-6 p-1'/>
                <SiMysql className='w-24 h-24 m-6 p-1'/>
        </div>
    </section>
  )
}

export default About