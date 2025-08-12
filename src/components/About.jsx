import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-slate-50"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-6 sm:mb-12 lg:mb-16 text-slate-800">
          Sobre mí
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Contenido de texto */}
          <div className="space-y-3 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left lg:pl-24 max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 lg:max-w-none lg:px-0">
            <div className="prose prose-sm lg:prose-base max-w-none">
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mb-2 lg:mb-4">
                Técnico Superior en Desarrollo de Aplicaciones Web, desarrollo y mantenimiento de soluciones web modernas.
              </p>
              
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mb-2 lg:mb-4">
                Me gusta escribir código limpio, reutilizable y escalable, aplicando buenas prácticas y metodologías ágiles. Valoro el trabajo en equipo, la organización y la mejora continua.
              </p>
              
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mb-2 lg:mb-4">
                Soy una persona curiosa, proactiva y con una gran capacidad de aprendizaje. Me apasiona el deporte, lo que ha reforzado en mí valores como la constancia, el esfuerzo y el compromiso, que también aplico en mi carrera como desarrollador.
              </p>
              
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mb-2 lg:mb-4">
                Actualmente busco oportunidades para crecer profesionalmente en entornos donde pueda aportar mis conocimientos, seguir aprendiendo y colaborar en proyectos desafiantes que aporten valor real.
              </p>
            </div>
          </div>

          {/* Imagen de perfil */}
          <div className="flex justify-center order-1 lg:order-2 lg:mt-8">
            <div className="relative">
              <div className="w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-72 lg:w-80 lg:h-96 rounded-lg bg-gray-200 overflow-hidden shadow-xl">
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
          <h3 className="text-base sm:text-lg font-semibold text-slate-800">Tecnologías principales</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {['Angular', 'React', 'Symfony', 'Tailwind CSS', 'JavaScript/TypeScript', 'PHP', 'HTML5 & CSS3', 'Git'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-full text-xs sm:text-sm shadow-md hover:from-blue-600 hover:to-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
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
            className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r  from-blue-400 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
          >
            Ver mis proyectos
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-slate-600 text-slate-600 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300 font-semibold text-sm cursor-pointer"
          >
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;