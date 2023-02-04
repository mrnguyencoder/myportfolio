import React from 'react';
import carole from '../assets/carole.png';
import sonia from '../assets/sonia.png';
import agnes from '../assets/agnes.png';

function Projects() {
    const project = [
        {
          title: `photographe de plateau`,
          description:
            `album photo pour chaque film`,
          site:
            `https://carolebethuel.fr/`,
          code: `https://github.com/mrnguyencoder/carole-bethuel`,
          photo: carole,
        },
        {
          title: `auteure, rédactrice and journaliste`,
          description:
            `présentation du livre`,
          site:
            `https://soniarachline.fr/`,
          code: `https://github.com/mrnguyencoder/sonia-rachline.fr`,
          photo: sonia,
        },
        {
          title: `accompagnement à la parentalité`,
          description:
            `présentation des services et tarifs`,
          site:
            `https://unemaintendue-conseils.fr/`,
          code: `https://github.com/mrnguyencoder/Vite-unemaintendue-conseils`,
          photo: agnes,
        },
      ]
  return (

    <section id="projects" className="py-16 px-4 bg-slate-50 text-slate-900 ">
      <h2 className="text-3xl py-16 text-center text-green-500 font-bold">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.map((item) => (
          <div key={item.title} className="space-y-4 text-center shadow-sm px-2 py-6 bg-slate-200 rounded-xl">
            <h3 className="text-center text-2xl font-bold">{item.title}</h3>
            <p className="text-xl text-slate-600">{item.description}</p>
            <div className='p-6'><img src={item.photo} alt="nguyen dev projects" className="rounded-xl shadow-lg hover:opacity-80" /></div>
            <div className="flex justify-between px-16">
              <a href={item.site} className="bg-green-500 px-6 py-2 text-yellow-400 rounded-full shadow-md hover:opacity-80">Site</a>
              <a href={item.code} className="bg-slate-500 px-6 py-2 text-slate-50 rounded-full shadow-md hover:opacity-80">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects