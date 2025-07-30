const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll' // Fixed solo en desktop
      }}
    >
      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-left max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-5 sm:mb-7 leading-tight text-white">
            José Manuel García Muñoz
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mb-6 sm:mb-8 leading-relaxed text-white">
            Técnico Superior en Desarrollo de Aplicaciones Web
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-8 sm:mb-12 leading-relaxed text-white/80 max-w-3xl">
            Del campo de fútbol al mundo digital
            <br className="hidden sm:block" />
            Técnico Superior DAW especializando la mentalidad ganadora 
            <br className="hidden sm:block" />
            en crear experiencias web excepcionales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Conoce más sobre mí
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-800 transition-all duration-300 font-semibold text-base"
            >
              Ver mis proyectos
            </button>
          </div>
          
          <div className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl">
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-white" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-white">Almería, Spain</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
