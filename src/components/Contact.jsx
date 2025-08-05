import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-12 lg:mb-16 text-slate-800">
          Contacto
        </h2>
        
        <div className="space-y-12 lg:space-y-16">
          {/* Información de contacto y Redes sociales en la misma fila */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Información de contacto */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-6 lg:mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <EnvelopeIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800 text-center px-2 break-words">
                  Información de contacto
                </h3>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 lg:space-x-4 max-w-xl mx-auto px-2">
                <a href="mailto:josemanugm15@gmail.com" className="flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-3 cursor-pointer group min-w-0 flex-shrink-0 w-full sm:w-auto">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
                    <EnvelopeIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base text-slate-600 text-center break-all sm:whitespace-nowrap">josemanugm15@gmail.com</span>
                </a>
                
                <a href="tel:+34686365448" className="flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-3 cursor-pointer group min-w-0 flex-shrink-0 w-full sm:w-auto">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg">
                    <PhoneIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base text-slate-600 text-center whitespace-nowrap">+34&nbsp;686365448</span>
                </a>
                
                <div className="flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-3 min-w-0 flex-shrink-0 w-full sm:w-auto">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base text-slate-600 text-center whitespace-nowrap">Almería,&nbsp;España</span>
                </div>
              </div>
            </div>
            
            {/* Redes sociales */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-6 lg:mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800 text-center px-2 break-words">
                  Sígueme en redes sociales
                </h4>
              </div>
              <div className="flex justify-center space-x-2 sm:space-x-4 lg:space-x-6">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/josemaweb" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-3 min-w-0 flex-shrink-0">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base text-slate-600 text-center whitespace-nowrap">LinkedIn/josemaweb</span>
                </a>
                {/* GitHub */}
                <a href="https://github.com/Josema1594" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-3 min-w-0 flex-shrink-0">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center hover:from-slate-800 hover:to-slate-900 transition-all duration-300 shadow-lg">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base text-slate-600 text-center whitespace-nowrap">GitHub/Josema1594</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl border border-slate-200">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 lg:mb-8 text-slate-800">
                  Envíame un mensaje
                </h3>
              </div>
            
              
              <form action="https://formspree.io/f/xldlppbv" method="POST" className="space-y-4 lg:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 lg:px-4 lg:py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm lg:text-base"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 lg:px-4 lg:py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm lg:text-base"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 lg:px-4 lg:py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm lg:text-base"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    required
                    className="w-full px-3 py-2 lg:px-4 lg:py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none text-sm lg:text-base"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-2.5 px-4 lg:py-3 lg:px-6 rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all duration-300 font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
