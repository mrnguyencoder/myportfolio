import React from 'react'

function Projects() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">Project 1</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo.
              </p>
              <a
                href="#"
                className="inline-block py-2 px-4 rounded bg-blue-500 text-white font-bold hover:bg-blue-600"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">Project 2</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo.
              </p>
              <a
                href="#"
                className="inline-block py-2 px-4 rounded bg-blue-500 text-white font-bold hover:bg-blue-600"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  )
}

export default Projects