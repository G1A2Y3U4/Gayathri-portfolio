import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-12 bg-indigo-50/50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <div className="glass p-5 md:p-6 rounded-lg">
          <p className="text-gray-700 dark:text-gray-200">
            Hello! I'm Gayathri S. N, an aspiring Full Stack Web Developer from Chennai, India. I recently completed my B.E. in Computer Science and Engineering from St. Peter's College of Engineering and Technology with a CGPA of 8.24 (2022-2026). I enjoy building scalable web applications and exploring AI-powered solutions.
          </p>
          <h3 className="mt-4 font-semibold">Career Goals</h3>
          <p className="text-gray-700 dark:text-gray-200">
            To grow as a Full Stack Developer focusing on React-based frontends, Node.js backends, and leveraging AI for smarter applications.
          </p>
        </div>
      </div>
    </section>
  )
}
