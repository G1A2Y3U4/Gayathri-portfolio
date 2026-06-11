import React from 'react'
import { skills } from '../data/skills'

function Card({title, items}){
  const colorMap = {
    frontend: 'bg-gradient-to-r from-pink-500 to-yellow-400',
    backend: 'bg-gradient-to-r from-indigo-500 to-blue-500',
    database: 'bg-gradient-to-r from-green-400 to-emerald-500',
    tools: 'bg-gradient-to-r from-gray-600 to-gray-800',
    'ai & prompt engineering': 'bg-gradient-to-r from-purple-500 to-indigo-500'
  }

  const key = title.toLowerCase()
  const badgeClass = colorMap[key] || 'bg-gray-200 dark:bg-gray-700'

  return (
    <div className="p-4 rounded-lg card-diff h-full flex flex-col">
      <h4 className="font-semibold mb-2">{title}</h4>
      <ul className="flex flex-wrap gap-2">
        {items.map(i => (
          <li key={i}>
            <span className={`${badgeClass} text-white px-3 py-1 rounded-full text-sm shadow transition transform hover:scale-105`}>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills(){
  return (
    <section id="skills" className="py-12 section-bg-2">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Frontend" items={skills.frontend} />
          <Card title="Backend" items={skills.backend} />
          <Card title="Database" items={skills.database} />
          <Card title="Tools" items={skills.tools} />
          <Card title="AI & Prompt Engineering" items={skills.ai} />
        </div>
      </div>
    </section>
  )
}
