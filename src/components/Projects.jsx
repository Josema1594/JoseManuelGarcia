const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Liberty Tattoo Studio",
      description: "Es una aplicación para un estudio de tatuajes real. Permite a los usuarios consultar tatuadores, ver sus portafolios, reservar citas y conocer mejor el entorno del estudio. Cuenta con un sistema de gestión de citas conectado a una base de datos, para facilitar la comunicación y la experiencia del cliente.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "phpMyAdmin", "Xampp"],
      image: "liberty.jpg"
    },
    {
      id: 2,
      title: "Codearts Invoice", 
      description: "Colaboré en el desarrollo de una aplicación diseñada para la gestión empresarial, enfocada en el control financiero y la administración de facturas. Combina un frontend moderno con un backend robusto para ofrecer una experiencia de usuario fluida y eficiente.",
      tech: ["Angular", "Tailwind CSS", "Symfony", "PHP", "Docker",],
      image: "codearts1.png"
    },
    {
      id: 3,
      title: "Task List",
      description: "Descripción del proyecto desarrollado con tecnologías modernas", 
      tech: ["Angular", "Spring Boot", "MySQL"],
      image: "tasklist.png"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Descripción del proyecto desarrollado con tecnologías modernas", 
      tech: ["React", "Vite", "Tailwind CSS", "CSS", "Vercel", "Git", "GitHub"],
      image: ""
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
            <div key={project.id} className="bg-[#f8f6f2] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
