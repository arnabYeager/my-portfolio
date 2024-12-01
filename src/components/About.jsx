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
            I am a 2024 B.Tech graduate in Electrical Engineering with a strong passion for web development. Over the past year, I have dedicated myself to learning and honing my skills in front-end development, complemented by a foundational understanding of back-end technologies. Enthusiastic about pursuing a career in full-stack web development, I remain committed to continuously expanding my expertise in modern technologies to excel in this field. As a quick learner with strong communication skills, I thrive in collaborative environments and look forward to contributing as a valuable member of any development team. I am actively seeking opportunities to leverage my creativity and technical skills to deliver impactful web solutions and grow as a professional developer.            </p>
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