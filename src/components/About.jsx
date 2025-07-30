import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-slate-800">
          Sobre mí
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contenido de texto */}
          <div className="space-y-5 lg:space-y-6 order-2 lg:order-1 text-center lg:text-left lg:pl-16">
            <div className="prose prose-base lg:prose-lg max-w-none">
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                Me apasiona la tecnología y me encanta pasar tiempo desarrollando mis propias aplicaciones y dando vida a las ideas creativas a través del código.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                Con sede en Almería, me especializo en tecnologías modernas de la web con un enfoque en el desarrollo frontend, y ampliar mi conjunto de habilidades.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                Cuando no estoy codificando, puedes encontrarme explorando nuevos lugares, o trabajando en proyectos personales que me desafían a crecer como desarrollador.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                Actualmente buscando nuevas oportunidades para contribuir a proyectos significativos y continuar mi crecimiento profesional.
              </p>
            </div>
          </div>

          {/* Imagen de perfil */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-56 h-72 sm:w-64 sm:h-80 lg:w-80 lg:h-96 rounded-lg bg-gray-200 overflow-hidden shadow-xl">
                <img 
                  src="/cv.jpg" 
                  alt="José Manuel García Muñoz"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" style={{display: 'none'}}>
                  <svg className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills badges - Debajo de la foto */}
        <div className="mt-12 space-y-4 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-slate-800">Tecnologías principales:</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {['React', 'JavaScript', 'Symphony', 'Angular', 'Tailwind', 'SQL', 'Git', 'CSS', 'HTML'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 rounded-full text-xs sm:text-sm font-medium border border-slate-200 hover:from-slate-200 hover:to-blue-200 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* CTA Buttons - Centrados en la página */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r  from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver mis proyectos
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-slate-600 text-slate-600 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300 font-semibold text-sm"
          >
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;