import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaXTwitter, FaEnvelope } from 'react-icons/fa6'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState('light')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is Tailwind's md breakpoint
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return // Don't handle scroll events on mobile

      const heroSection = document.getElementById('home')
      const socialSidebar = document.getElementById('social-sidebar')
      
      if (heroSection && socialSidebar) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        if (window.scrollY > heroBottom) {
          socialSidebar.classList.add('opacity-0', 'pointer-events-none')
          socialSidebar.classList.remove('opacity-100')
        } else {
          socialSidebar.classList.add('opacity-100')
          socialSidebar.classList.remove('opacity-0', 'pointer-events-none')
        }
      }
    }

    if (!isMobile) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 ${theme}`}>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} scrollToSection={scrollToSection} />
      
      {!isMobile && (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg z-50 transition-opacity duration-300" id="social-sidebar">
          <a href="https://www.linkedin.com/in/arnab-bakshi" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
            <FaLinkedin size={30} />
            <span className="sr-only">LinkedIn profile</span>
          </a>
          <a href="https://github.com/arnabYeager" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
            <FaGithub size={30} />
            <span className="sr-only">GitHub profile</span>
          </a>
          <a href="https://x.com/bakshi_arnab" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-500">
            <FaXTwitter size={30} />
            <span className="sr-only">X (formerly Twitter) profile</span>
          </a>
          <a href="mailto:bakshiarnab2001@gmail.com" className="text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
            <FaEnvelope size={30} />
            <span className="sr-only">Email contact</span>
          </a>
        </div>
      )}

      <main>
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
