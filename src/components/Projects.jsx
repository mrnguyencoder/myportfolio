import React from 'react'

function Projects() {
    const posts = [
        // {
        //   title: `abc`,
        //   href: '#',
        //   code: `` ,
        //   description:
        //     ``,
        //   image: ``,
        //   used: ``
        // },
        {
          title: 'photographe de plateau',
          description:
            '',
          site:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          code: ``,
        },
      ]
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
    <div className="absolute inset-0">
      <div className="h-1/3 bg-white sm:h-2/3" />
    </div>
    <div className="relative mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My projects</h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          My stack is React JS - Vite 
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={post.site} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
            </div>
            <div className="flex">
                <button>Site {post.code}</button>
                <button>Code {post.code}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Projects