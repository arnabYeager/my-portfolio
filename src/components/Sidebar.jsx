import React from 'react'

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-24 bg-light-primary dark:bg-dark-primary shadow-md">
      <ul className="flex flex-col items-center space-y-6 mt-10">
        <li><a href="#hero" className="hover:underline">🏠</a></li>
        <li><a href="#about" className="hover:underline">👤</a></li>
        <li><a href="#projects" className="hover:underline">💼</a></li>
        <li><a href="#contact" className="hover:underline">✉️</a></li>
      </ul>
    </aside>
  )
}

export default Sidebar 