import React, { useEffect, useState } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark')

  useEffect(() =>{
    if(theme) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme ? 'dark' : 'light')
  },[theme])

  return (
    <button aria-label="Toggle theme" onClick={() => setTheme(t => !t)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
      {theme ? <HiSun size={20} /> : <HiMoon size={20} />}
    </button>
  )
}
