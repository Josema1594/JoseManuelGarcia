const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-blue-800">
          Contacto
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de contacto */}
          <div className="space-y-6 lg:space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-6 text-gray-800">
              Información de contacto
            </h3>
            
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.52c.35.2.78.2 1.12 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-base lg:text-lg text-gray-700">josemanugm15@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-base lg:text-lg text-gray-700">+34 686 365 448</span>
              </div>
              
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-base lg:text-lg text-gray-700">Almería, España</span>
              </div>
            </div>
            
            <div className="pt-4 lg:pt-6">
              <h4 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-gray-800">
                Sígueme en redes sociales
              </h4>
              <div className="flex space-x-4 lg:space-x-6">
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                {/* GitHub */}
                <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl border border-blue-100">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-6 text-gray-800">
              Envíame un mensaje
            </h3>
            
            <form className="space-y-4 lg:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                  placeholder="Asunto del mensaje"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm lg:text-base"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 lg:py-3 lg:px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold text-sm lg:text-base"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
