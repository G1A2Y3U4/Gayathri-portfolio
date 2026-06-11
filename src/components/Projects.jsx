import React from 'react'
import { projects } from '../data/projects'
import grabitImage from '../data/Grabit img.jpeg'

export default function Projects(){
  return (
    <section id="projects" className="py-12 section-bg-1">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 gap-6 items-stretch">
          {projects.map(p => (
            <article key={p.id} className="overflow-hidden rounded-lg card-diff h-full grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div className="bg-gray-100 dark:bg-gray-800">
                <img src={p.image || grabitImage} alt={`${p.title} preview`} className="h-56 md:h-full w-full object-cover" />
              </div>
              <div className="p-5 md:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-xl">{p.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map(t => <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">{t}</span>)}
                  </div>
                </div>
                <div className="mt-4">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex px-3 py-2 border rounded text-center text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-800">View Project</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
