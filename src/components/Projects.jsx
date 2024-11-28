import React from 'react'
import portfolio from '../images/portfolio.png';
import todo from '../images/ToDo.png';
import foodie from '../images/Foodie.png';
export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React, Tailwind CSS, and JavaScript.",
      image: portfolio,
      link: "https://github.com/arnabYeager/my-portfolio"
    },
    {
      title: "ToDo List",
      description: "Built a responsive To-Do app using ReactJS, enabling users to create, organize, mark as complete, and delete tasks with a seamless and interactive UI.",
      image: todo,
      link: "https://github.com/arnabYeager/To-Do-app-using-ReactJS"
    },
    {
      title: "Foodie E-commerce site",
      description: "Created a dynamic e-commerce website, Foodie, using HTML, CSS, and JavaScript, featuring interactive UI and basic cart functionality",
      image: foodie,
      link: "https://github.com/arnabYeager/foodie_E-commerce-site"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 