import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profilePhoto from "../data/Gayathri's photo.jpg.jpeg"

export default function Hero(){
  return (
    <section id="home" className="flex items-center section-bg-1">
      <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.h1 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-extrabold">
            Hi, I'm Gayathri
          </motion.h1>
          <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Full Stack Developer | React | Next.js | Python | AI Enthusiast
          </motion.p>
          <motion.p className="mt-4 max-w-2xl mx-auto md:mx-0 text-gray-700 dark:text-gray-300">
            Aspiring Full Stack Web Developer with strong skills in React, Next.js, JavaScript, Python, and AI Prompt Engineering.
          </motion.p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            <a href="#projects" className="px-4 py-2 bg-primary text-white rounded-md shadow hover:opacity-90">View Projects</a>
            <a href="/Gayathri_S_N_Resume.html" download="Gayathri_S_N_Resume.html" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded-md">Download Resume</a>
          </div>
          <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
            <a
              aria-label="GitHub"
              href="https://github.com/G1A2Y3U4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/gayathri-sankaran-3b3695280/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a aria-label="Email" href="mailto:gayathrisankaran14@gmail.com"><FaEnvelope size={20} /></a>
          </div>
        </div>
        <motion.div initial={{scale:0.94, opacity:0}} animate={{scale:1, opacity:1}} className="w-full md:w-auto flex flex-none justify-center md:justify-end">
          <div className="w-56 sm:w-64 md:w-72 aspect-[4/5] overflow-hidden rounded-md shadow-lg bg-white">
            <img
              src={profilePhoto}
              alt="Gayathri S. N"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/profile-placeholder.svg'; }}
              className="profile-photo w-full h-full object-cover object-top bg-white rounded-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
