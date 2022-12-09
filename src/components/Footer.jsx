import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiBox  } from 'react-icons/fi';

function Footer() {
  return (
    <footer className='flex justify-between px-6 md:items-start items-center md:flex-row flex-col border-t-2 border-indigo-100'>
        <p className="text-lime-700 pt-5">© 2022 Nguyen Coder | All Rights Reserved</p>
        <div className="flex justify-center gap-4 py-5 text-lg text-cyan-600">
            <FiLinkedin />
            <FiGithub />
            <FiInstagram />
            <FiBox />
        </div>

        {/* className='pt-3 w-full flex justify-between md:items-start items-center md:flex-row flex-col border-t dark:border-t-[#161B22] border-t-pro-w-border' */}
        
    </footer>
  )
}

export default Footer