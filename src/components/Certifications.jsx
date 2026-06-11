import React from 'react'
import { certs } from '../data/certifications'

export default function Certifications(){
  return (
    <section id="certifications" className="py-12 section-bg-2">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certs.map(c => (
            <div key={c.id} className="p-4 rounded-lg card-diff">{c.title}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
