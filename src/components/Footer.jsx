import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 border-t">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Gayathri S. N | Full Stack Developer. All rights reserved.
      </div>
    </footer>
  )
}
