import React from 'react'

export default function About() {
  const skills = ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Git', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Responsive Design'];

  return (
    <section id="about" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Get to Know Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I am a B.Tech fresher 2024 candidate with a background in Electrical Engineering. 
              I have been learning web development for 1 year and am passionate and creative about frontend development, 
              with basic knowledge of backend. I am enthusiastic about full stack web development and am continuously 
              learning new technologies to become a full stack web developer. I am currently looking for good opportunities 
              and will do my best to fit as a developer. I am also a quick learner and good at communication, 
              making me a valuable part of any development team.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center shadow-md"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 