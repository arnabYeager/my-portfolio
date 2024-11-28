import React from 'react'
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Arnab Bakshi</h2>
            <p className="mt-2 text-sm text-gray-300">Frontend focused Web Developer, going to be a Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/arnab-bakshi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/arnabYeager" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://x.com/bakshi_arnab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">X (formerly Twitter)</span>
              <FaXTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            © {new Date().getFullYear()} Arnab Bakshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 