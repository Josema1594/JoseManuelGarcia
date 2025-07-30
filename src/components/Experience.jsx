const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Desarrollador Frontend Senior",
      company: "Empresa ABC",
      period: "2022 - Presente",
      description: "Desarrollo de aplicaciones web modernas usando React, TypeScript y otras tecnologías frontend.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      id: 2,
      position: "Desarrollador Full Stack",
      company: "Startup XYZ",
      period: "2020 - 2022",
      description: "Desarrollo completo de aplicaciones web desde el frontend hasta el backend y base de datos.",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 3,
      position: "Desarrollador Junior",
      company: "Agencia Digital",
      period: "2019 - 2020",
      description: "Colaboración en proyectos web y aprendizaje de tecnologías modernas de desarrollo.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-slate-800">
          Experiencia
        </h2>
        
        <div className="space-y-6 lg:space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Línea vertical - Hidden en móvil */}
              {index !== experiences.length - 1 && (
                <div className="hidden sm:block absolute left-6 top-12 w-0.5 h-full bg-gray-200"></div>
              )}
              
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Punto de la timeline */}
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></div>
                </div>
                
                {/* Contenido */}
                <div className="flex-1 bg-gray-50 rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {exp.position}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 text-sm sm:text-base mt-2 sm:mt-0 text-center sm:text-right">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
