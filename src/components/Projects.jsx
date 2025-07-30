const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Liberty Tattoo Studio",
      description: "Descripción del proyecto desarrollado con tecnologías modernas",
      tech: ["React", "Node.js", "MongoDB"],
      image: "liberty.jpg"
    },
    {
      id: 2,
      title: "Codearts Invoice", 
      description: "Descripción del proyecto desarrollado con tecnologías modernas",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/400x250?text=Proyecto+2"
    },
    {
      id: 3,
      title: "Task List",
      description: "Descripción del proyecto desarrollado con tecnologías modernas", 
      tech: ["Angular", "Spring Boot", "MySQL"],
      image: "tasklist.png"
    }
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-slate-800">
          Proyectos
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
