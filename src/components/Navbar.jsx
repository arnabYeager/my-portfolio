import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import logo from '../images/photo.png';

function Navbar({ activeSection, setActiveSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    scrollToSection(section);
    setIsMenuOpen(false); // Close the mobile menu after selection
  };

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 fixed w-full top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-auto w-auto max-h-12 max-w-12 rounded-full" src={logo} alt="Logo" />
          <span className="ml-3 text-2xl font-semibold text-gray-900 dark:text-white">Arnab Bakshi</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              className={`px-4 py-2 rounded-md text-lg font-medium ${
                activeSection === item.section
                  ? 'bg-gray-900 text-white dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.section);
              }}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-2"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.section}
                href={`#${item.section}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.section
                    ? 'bg-gray-900 text-white dark:bg-gray-700'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.section);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;