import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { HiMenu } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  {href: '#home', label: 'Home'},
  {href: '#about', label: 'About'},
  {href: '#skills', label: 'Skills'},
  {href: '#projects', label: 'Projects'},
  {href: '#certifications', label: 'Certifications'},
  {href: '#contact', label: 'Contact'}
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 border-b border-indigo-100 dark:border-white/10 shadow-sm backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg">GAYATHRI S N</a>
        <div className="hidden md:flex items-center space-x-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-700 dark:text-gray-200 hover:underline">{l.label}</a>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            <HiMenu size={22} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="md:hidden fixed inset-0 bg-black/40 z-40">
            <motion.div initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} onClick={(e) => e.stopPropagation()} className="absolute right-0 top-0 w-3/4 max-w-xs h-full bg-white dark:bg-gray-800 p-6">
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="mb-6">Close</button>
              <ul className="flex flex-col gap-4">
                {links.map(l => (
                  <li key={l.href}><a onClick={() => setOpen(false)} href={l.href} className="block text-lg">{l.label}</a></li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
