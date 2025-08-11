import { DocumentArrowDownIcon, EyeIcon, BriefcaseIcon, AcademicCapIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const CV = () => {
  return (
    <section id="cv" className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 text-slate-800">
          Curriculum Vitae
        </h2>
        
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-12 sm:mb-16 leading-relaxed max-w-3xl mx-auto text-center">
          Descarga mi CV completo para conocer más detalles sobre mi experiencia, 
          educación y habilidades técnicas.
        </p>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-10 max-w-md mx-auto mb-12 sm:mb-16">
          <div className="mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <DocumentArrowDownIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-800 mb-3 text-center px-2 break-words">
              Cv_JoseManuelGarcia.pdf
            </h3>
            <div className="text-center">
              <p className="text-sm sm:text-base text-slate-500 bg-slate-50 px-3 py-1 rounded-full inline-block">
                Última actualización: Agosto 2025
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <a 
              href="/Cv_JoseManuelGarcia.pdf"
              download="Cv_JoseManuelGarcia.pdf"
              className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              Descargar CV (PDF)
            </a>
            
            <a 
              href="/Cv_JoseManuelGarcia.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full border-2 border-slate-600 text-slate-600 py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-slate-50 transition-all duration-300 font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <EyeIcon className="w-5 h-5" />
              Ver CV Online
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <BriefcaseIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">Experiencia</h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">2 años en desarrollo web</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <AcademicCapIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">Educación</h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Desarrollador de Aplicaciones Web</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <CodeBracketIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">Habilidades</h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Frontend & Backend</p>
          </div>
        </div>
        
        {/* Footer mejorado */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200 text-center">
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              © 2025 José Manuel García Muñoz. Todos los derechos reservados.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Portfolio desarrollado con React, Vite y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV
