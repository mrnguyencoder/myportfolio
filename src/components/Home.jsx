import React, { useState } from "react";
import working from '../assets/meeting.jpg';
import cv from '../assets/CV.jpg';

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  return (
    <section id="home" className="relative bg-slate-900">
    <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
      <img
        className="h-full w-full object-cover"
        src={working}
        alt="nguyen dev nguyen coder"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 926 676"
        aria-hidden="true"
        className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]"
      >
        <path
          fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
          fillOpacity=".4"
          d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
        />
        <defs>
          <linearGradient
            id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
            x1="926.392"
            x2="-109.635"
            y1=".176"
            y2="321.024"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF46" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
      <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
        <h2 className="text-base font-semibold leading-7 text-yellow-300">React JS Developer</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-green-500">Let's work together to build great things!</p>
        <p className="mt-6 text-base leading-7 text-gray-300">
        Bonjour, je suis Van Duy NGUYEN, un développeur web avec plus d'un an d'expérience spécialisé en React JS. 
        J'ai une solide compréhension du cadre React et j'ai réussi à livrer de nombreux projets qui ont montré mes compétences dans la construction d'applications web interactives et conviviales. Avec ma passion pour la technologie et ma soif constante de connaissances, je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences et créer des solutions innovantes. 
        Je cherche des opportunités pour poursuivre ma carrière en tant que développeur web et faire une impact positif sur les projets sur lesquels je travaille. Travaillons ensemble pour construire de grandes choses!
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="#projects"
            className="inline-flex rounded-md bg-white/10 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:text-yellow-300"
          >
            Visitez mes projets
          </a>
          <button
            className="inline-flex rounded-md bg-white/10 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:text-yellow-300"
            onClick={() => setShowModal(true)}
          >
            Afficher mon CV
          </button>
          {showModal && (
            <div className="flex">
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center ">
                <img src={cv} alt="CV nguyen coder"  className="max-w-full max-h-full"/>
                  <button onClick={handleCloseModal}
                          className="absolute top-1 right-1 p-1 md:p-3 text-white hover:scale-110 text-4xl"
                  >
                  x
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Home