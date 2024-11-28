import React from 'react';
import { Code, Rocket, Briefcase, ChevronDown } from 'lucide-react';

// ScrollIndicator component defined within the same file
const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center">
        <div className="w-8 h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full relative">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gray-500 dark:bg-gray-600 rounded-full animate-scroll"></div>
        </div>
        <div className="mt-2">
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-600 animate-bounce" />
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 100%); }
          100% { transform: translate(-50%, 0); }
        }
        .animate-scroll {
          animation: scroll 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 bg-hero-texture bg-cover bg-center">
      <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4">
              Arnab Bakshi
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Aspiring Full Stack Developer
            </p>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-600 dark:text-gray-300 sm:text-2xl md:mt-5 md:max-w-3xl leading-relaxed">
              Passionate about crafting beautiful, functional websites and mastering the art of full stack development.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-lg text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Code className="w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-green-600 dark:text-green-400" />
                <span>Open to Opportunities</span>
              </div>
            </div>
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center sm:max-w-xl">
              <div className="rounded-md shadow">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105"
                >
                  Hire Me
                </button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105"
                >
                  View My Projects
                </button>
              </div>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </section>
    </div>
  )
} 