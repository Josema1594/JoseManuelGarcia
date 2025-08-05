const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Grado Superior en Desarrollo de Aplicaciones Web",
      institution: "Realizado en el Centro FP Ilerna",
      period: "2023-2025",
      description: ""
    },
    {
      id: 2,
      degree: "Curso de Ofimática. Aplicaciones informáticas de gestión",
      institution: "Curso realizado en Mauprev, S.L.",
      period: "2024",
      description: ""
    },
    {
      id: 3,
      degree: "Curso de Aprendizaje Cooperativo: fundamentos, técnicas y aplicación en el aula",
      institution: "Curso realizado en la Universidad de Antonio de Nebrija",
      period: "2021",
      description: ""
    },
    {
      id: 4,
      degree: "Curso de Actividades extraescolares: bases, tipos y desarrollo",
      institution: "Curso realizado en la Universidad de Antonio de Nebrija",
      period: "2020",
      description: ""
    },
    {
      id: 5,
      degree: "Grado en Educación Infantil (Plan 2010)",
      institution: "Carrera realizada en la Universidad de Almería",
      period: "2013-2017",
      description: ""
    }
  ]

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 text-slate-800">
          Educación & Formación
        </h2>
        
        <div className="relative">
          {/* Línea principal del timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-blue-600 rounded-full"></div>
          
          <div className="space-y-8 lg:space-y-12">
            {education.map((edu, index) => (
              <div key={edu.id} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Punto del timeline */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Contenido */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="group bg-white rounded-2xl shadow-xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200">
                    {/* Header con año */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white bg-gradient-to-r from-slate-700 to-slate-800 px-4 py-2 rounded-full shadow-md">
                            {edu.period}
                          </span>
                        </div>
                        
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 mb-3 leading-tight">
                          {edu.degree}
                        </h3>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                          <p className="text-base font-medium text-slate-600">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Línea decorativa */}
                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Espacio vacío para el otro lado en desktop */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
