const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Grado Superior en Desarrollo de Aplicaciones Web",
      institution: "Centro FP Ilerna",
      period: "2025",
      description: "Formación integral en desarrollo de software, algoritmos, estructuras de datos y gestión de proyectos tecnológicos."
    },
    {
      id: 2,
      degree: "Curso de Ofimática. Aplicaciones informáticas de gestión",
      institution: "Mauprev, S.L.",
      period: "2024",
      description: "Especialización en tecnologías web modernas, frameworks JavaScript y desarrollo de APIs."
    },
    {
      id: 3,
      degree: "Curso de Aprendizaje Cooperativo: fundamentos, técnicas y aplicación en el aula",
      institution: "Universidad de Antonio de Nebrija",
      period: "2021",
      description: "Profundización en el ecosistema React y desarrollo backend con Node.js."
    },
    {
      id: 4,
      degree: "Grado en Educación Infantil",
      institution: "Universidad de Almería",
      period: "2017",
      description: "Profundización en el ecosistema React y desarrollo backend con Node.js."
    }
  ]

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-blue-800">
          Educación
        </h2>
        
        <div className="space-y-6 lg:space-y-8">
          {education.map((edu, index) => (
            <div key={edu.id} className="relative">
              {/* Línea vertical - Hidden en móvil */}
              {index !== education.length - 1 && (
                <div className="hidden sm:block absolute left-6 top-12 w-0.5 h-full bg-gray-200"></div>
              )}
              
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Icono de educación */}
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-300 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                
                {/* Contenido */}
                <div className="flex-1 bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {edu.degree}
                      </h3>
                      <p className="text-green-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-gray-500 text-sm sm:text-base mt-2 sm:mt-0 text-center sm:text-right">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
