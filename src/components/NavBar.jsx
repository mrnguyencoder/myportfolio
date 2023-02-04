import React from 'react';
import logo from '../assets/nguyencoderlogo.png';

function Navbar() {
    const navigation = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
      ]
  return (
    <header className="bg-slate-800">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-yellow-300 py-6 lg:border-none">
            <div className="flex items-center">
            <a href="#">
                <span className="sr-only">Nguyen coder</span>
                <img className="h-10" src={logo} alt="" />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                </a>
                ))}
            </div>
            </div>
            <div className="ml-10 ">
            <a
                href="../assets/CV-NGuyen.pdf" 
                download="CV nguyen"
                className="inline-flex rounded-md bg-yellow-300/10 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:text-yellow-300"
            >
                Télécharger mon CV
            </a>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
            </a>
            ))}
        </div>
        </nav>
    </header>
  )
}

export default Navbar