import React, { useState } from 'react'

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({})

  const toggleExpanded = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  const projects = [
    {
      id: "codearts-invoice",
      title: "Codearts Invoice", 
      description: "Durante mis prácticas colaboré en el desarrollo de una aplicación empresarial para la gestión financiera y administración de facturas.",
      detailedDescription: "Desarrollo de una aplicación web completa para la gestión financiera empresarial con dashboard interactivo y visualización de datos en tiempo real. La aplicación permite el control integral de facturas con diferentes estados, generación automática de reportes en PDF y filtrado por períodos temporales. Incluye métricas clave como ingresos totales, facturas pendientes, pagadas y vencidas, con gráficos dinámicos para análisis de rendimiento por gestor. El sistema cuenta con autenticación segura, diseño responsivo y arquitectura escalable optimizada para empresas.",
      tech: ["Angular", "Tailwind CSS", "Symfony", "PHP", "Docker"],
      image: "codearts1.png",
      category: "Experiencia Profesional",
      role: "Full Stack Developer",
      year: "2025"
    },
    {
      id: "liberty-tattoo-studio",
      title: "Liberty Tattoo Studio",
      description: "Desarrollo completo de aplicación web para estudio de tatuajes real. Sistema de gestión de tatuadores, portafolios, reservas de citas.",
      detailedDescription: "Desarrollo de una página web profesional para Liberty Tattoo Studio, un estudio de tatuajes real situado en Almería. La plataforma permite gestionar citas online, mostrar el portafolio de cada tatuador y ofrecer contenido visual atractivo. Incluye páginas personalizadas para los artistas y un sistema de contacto directo con los clientes. Diseñada para mejorar la presencia digital del negocio y optimizar su gestión diaria. Cuenta con un sistema de gestión de citas conectado a una base de datos, para facilitar la comunicación y la experiencia del cliente. Proyecto realizado en colaboración directa con el propietario del estudio.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "phpMyAdmin", "Xampp"],
      image: "liberty.jpg",
      category: "Experiencia Profesional",
      role: "Full Stack Developer",
      year: "2024"
    },
    {
      id: "task-list-manager",
      title: "Task List Manager",
      description: "Aplicación completa de gestión de tareas con funcionalidades avanzadas de búsqueda, ordenación y organización.",
      detailedDescription: "La aplicación es una lista de notas que permite añadir nuevas tareas con validación del título. Hay búsqueda en tiempo real que ignora mayúsculas y minúsculas para filtrar por nombre. Las tareas se pueden marcar como realizadas; al hacerlo se tachan visualmente con un check y se desplazan automáticamente al final de la lista para mantener foco en lo pendiente. También se pueden eliminar individualmente. El usuario puede ordenar el listado alfabéticamente, tanto de A a Z como de Z a A, con botones claros que disparan esa ordenación en el frontend. La aplicación se integra con un backend (Symfony), y se muestran notificaciones (toasts) para feedback al usuario. En conjunto ofrece una experiencia fluida de gestión de notas con funcionalidades de filtrado, ordenación y estado.",
      tech: ["Angular", "Tailwind CSS", "Symfony", "PHP", "Docker"],
      image: "tasklist.png",
      category: "Proyecto Académico",
      role: "Full Stack Developer",
      year: "2024"
    },
    {
      id: "portfolio-personal",
      title: "Portfolio Personal",
      description: "Desarrollo de portfolio personal responsive con diseño moderno, animaciones y navegación fluida.",
      detailedDescription: "Desarrollo de mi portfolio personal, una plataforma diseñada para mostrar mi experiencia, proyectos y formación de manera profesional. Incluye secciones organizadas y visualmente atractivas que destacan mis habilidades y trayectoria, ofreciendo una experiencia de usuario intuitiva y responsiva.",
      tech: ["React", "Vite", "Tailwind CSS", "CSS3", "Vercel", "Git", "GitHub"],
      image: "portfolio.png",
      category: "Proyecto Personal",
      role: "Frontend Developer",
      year: "2025"
    },
    {
      id: "mundo-gaming",
      title: "Mundo Gaming",
      description: "Portal web gaming personalizado que simula una plataforma de entretenimiento moderna con una interfaz futurista y efectos visuales llamativos.",
      detailedDescription: " El proyecto presenta un diseño completamente responsive con animaciones fluidas, menús interactivos y una estética gaming profesional con colores neón y efectos de brillo. Incluye navegación intuitiva, catálogo de películas/series organizadas, y componentes modulares que crean una experiencia visual inmersiva. La aplicación demuestra mis habilidades en desarrollo frontend moderno, creando interfaces atractivas y funcionales que combinan diseño visual impactante con usabilidad optimizada. Un ejemplo perfecto de cómo transformar una idea creativa en una aplicación web completamente funcional y visualmente espectacular.",
      tech: ["React", "Tailwind CSS", "TypeScript", "Vite", "PostCSS"],
      image: "JoseGaming.png",
      category: "Proyecto Personal",
      role: "Frontend Developer",
      year: "2024"
    }
  ]

  // Agrupar proyectos por categoría
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = []
    }
    acc[project.category].push(project)
    return acc
  }, {})

  const categoryOrder = ["Experiencia Profesional", "Proyecto Académico", "Proyecto Personal"]

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 text-slate-800">
          Proyectos & Experiencia
        </h2>
        
        {categoryOrder.map((category) => (
          groupedProjects[category] && (
            <div key={category} className="mb-16">
              <div className="text-center mb-10">
                <div className="relative">
                  {/* Línea decorativa */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30"></div>
                  </div>
                  {/* Título de categoría */}
                  <div className="relative flex justify-center">
                    <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-4 rounded-2xl shadow-xl border-4 border-white">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
                        {category}
                      </h3>
                      <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                {groupedProjects[category].map((project) => (
                  <div key={project.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-gradient-to-b from-blue-500 to-purple-600 flex flex-col lg:flex-row">
                    {project.image && (
                      <div className="lg:w-2/5 cursor-pointer group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                        <a 
                          href={`/${project.image}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block h-64 lg:h-80 w-full relative"
                        >
                          <img 
                            src={`/${project.image}`}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Overlay con gradiente */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                          {/* Icono de zoom */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    )}
                    <div className="flex-1 p-6 lg:p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl lg:text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                            {project.title}
                          </h4>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full shadow-sm">
                              {project.role}
                            </span>
                            <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                              {project.year}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-base text-slate-700 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Información expandida */}
                      {expandedProjects[project.id] && project.detailedDescription && (
                        <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50 shadow-inner">
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {project.detailedDescription}
                          </p>
                        </div>
                      )}
                      
                      {/* Botón Detalles */}
                      {project.detailedDescription && (
                        <button
                          onClick={() => toggleExpanded(project.id)}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-all duration-200 cursor-pointer group-hover:translate-x-1 mb-4"
                        >
                          <svg 
                            className={`w-5 h-5 mr-2 transition-transform duration-200 ${
                              expandedProjects[project.id] ? 'rotate-180' : ''
                            }`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          <span className="group-hover:underline">
                            {expandedProjects[project.id] ? 'Ocultar detalles' : 'Ver detalles'}
                          </span>
                        </button>
                      )}
                      
                      {/* Tecnologías */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
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
          )
        ))}
      </div>
    </section>
  )
}

export default Projects
