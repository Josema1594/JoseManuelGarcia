const CV = () => {
  return (
    <section id="cv" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-slate-800">
          Curriculum Vitae
        </h2>
        
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
          Descarga mi CV completo para conocer más detalles sobre mi experiencia, 
          educación y habilidades técnicas.
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 inline-block max-w-sm mx-auto">
          <div className="mb-6">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
            </svg>
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2">
              CV_JoseManuelGarcia.pdf
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Última actualización: Julio 2025
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <button className="w-full bg-blue-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-lg">
              Descargar CV (PDF)
            </button>
            
            <button className="w-full border-2 border-blue-600 text-blue-600 py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm sm:text-lg">
              Ver CV Online
            </button>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Experiencia</h4>
            <p className="text-sm sm:text-base text-gray-600">+3 años en desarrollo web</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Educación</h4>
            <p className="text-sm sm:text-base text-gray-600">Ingeniería en Sistemas</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Habilidades</h4>
            <p className="text-sm sm:text-base text-gray-600">Frontend & Backend</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV
