import React from 'react';
import { SiCss3, SiFirebase, SiGithub, SiGraphql, SiHtml5, SiJavascript, SiMysql, SiReact, SiTailwindcss } from "react-icons/si";


function About() {
  return (
    <section className=''>
        <h2 className="
            text-transparent bg-clip-text bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]
            ">My skill
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative overflow-hidden">
            <input type="checkbox" name="" id="" />
            <div className="bg-green-500 h-12 w-full flex items-center">
              <p className="text-lg">Why I become coder?</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-center">
                  <SiHtml5 className='' />
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
    </section>
  )
}

export default About