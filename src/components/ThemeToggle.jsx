import React from 'react'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
      {isDark ? '🌞' : '🌜'}
      console.log("Hello from theme toggle fnc");
    </button>
  )
}

export default ThemeToggle 