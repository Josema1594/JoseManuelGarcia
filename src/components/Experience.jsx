const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Full Stack Developer",
      company: "Codearts Invoice",
      period: "2025",
      description: "Desarrollo de una aplicación web completa para la gestión financiera empresarial con dashboard interactivo y visualización de datos en tiempo real. La aplicación permite el control integral de facturas con diferentes estados, generación automática de reportes en PDF y filtrado por períodos temporales. Incluye métricas clave como ingresos totales, facturas pendientes, pagadas y vencidas, con gráficos dinámicos para análisis de rendimiento por gestor. El sistema cuenta con autenticación segura, diseño responsivo y arquitectura escalable optimizada para empresas.",
      technologies: ["Angular", "Tailwind CSS", "Symfony", "PHP", "Docker",],
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "Task List",
      period: "2025",
      description: "La aplicación es una lista de notas/tareas que permite al usuario crear, buscar, ordenar y gestionar fácilmente sus items. Se pueden añadir nuevas tareas con validación del título, y cada tarea muestra cuándo se creó. Hay búsqueda en tiempo real que ignora mayúsculas y minúsculas para filtrar por nombre. Las tareas se pueden marcar como realizadas; al hacerlo se tachan visualmente con un check y se desplazan automáticamente al final de la lista para mantener foco en lo pendiente. También se pueden eliminar individualmente. El usuario puede ordenar el listado alfabéticamente, tanto de A a Z como de Z a A, con botones claros que disparan esa ordenación en el frontend. La interfaz usa Tailwind para una estética moderna y responsiva, incluyendo fondos, tarjetas, hover y estados deshabilitados. La aplicación se integra con un backend (Symfony) que expone endpoints REST para CRUD, completar todas, ordenadas y recuperación, y se muestran notificaciones (toasts) para feedback al usuario. En conjunto ofrece una experiencia fluida de gestión de notas con funcionalidades de filtrado, ordenación y estado.",
      technologies: ["Angular", "Tailwind CSS", "Symfony", "PHP", "Docker",]
    },
    {
      id: 3,
      position: "Full Stack Developer",
      company: "Liberty Tattoo Studio",
      period: "2024 - Actualidad",
      description: "Desarrollo de una página web profesional para Liberty Tattoo Studio, un estudio de tatuajes real situado en Almería. La plataforma permite gestionar citas online, mostrar el portafolio de cada tatuador y ofrecer contenido visual atractivo. Incluye páginas personalizadas para los artistas y un sistema de contacto directo con los clientes. Diseñada para mejorar la presencia digital del negocio y optimizar su gestión diaria. Cuenta con un sistema de gestión de citas conectado a una base de datos, para facilitar la comunicación y la experiencia del cliente. Proyecto realizado en colaboración directa con el propietario del estudio.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "phpMyAdmin", "Xampp"]
    },
    {
      id: 4,
      position: "Frontend Developer",
      company: "Portfolio",
      period: "2025",
      description: "Desarrollo de mi portfolio personal, una plataforma diseñada para mostrar mi experiencia, proyectos y formación de manera profesional. Incluye secciones organizadas y visualmente atractivas que destacan mis habilidades y trayectoria, ofreciendo una experiencia de usuario intuitiva y responsiva.",
      technologies: ["React", "Vite", "Tailwind CSS", "CSS", "Vercel", "Git", "GitHub"]
    }
  ]

  return (
    <section id="experience" className="py-8 sm:py-12 lg:py-16 bg-yellow-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-blue-800">
          Experiencia
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 relative border-l-4 border-blue-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #ffffff, #f9f9f9)',
              }}
            >
              {/* Fecha en la parte superior derecha */}
              <span className="absolute top-4 right-4 text-gray-500 text-sm sm:text-base">
                {exp.period}
              </span>

              {/* Contenido */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                {exp.position}
              </h3>
              <p className="text-blue-300 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 text-xs sm:text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
