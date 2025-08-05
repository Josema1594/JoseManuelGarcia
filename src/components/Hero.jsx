import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText = 'Técnico Superior en Desarrollo de Aplicaciones Web';

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && text !== fullText) {
        // Escribir texto
        setText(fullText.slice(0, text.length + 1));
        setTypingSpeed(80); // Velocidad normal al escribir
      } else if (isDeleting && text !== '') {
        // Borrar texto
        setText(fullText.slice(0, text.length - 1));
        setTypingSpeed(80); // Velocidad más rápida al borrar
      } else if (!isDeleting && text === fullText) {
        // Pausa antes de borrar
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        // Pausa antes de volver a escribir
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, typingSpeed, loopIndex]);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800"
      style={{
        backgroundImage: `url('/header.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
      }}
    >
      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 text-left max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:ml-100">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-medium mb-5 sm:mb-3 leading-tight text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            José Manuel García
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mb-6 sm:mb-8 leading-relaxed text-white" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            {text}
            <span className="blinking-cursor">|</span>
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-8 sm:mb-2 leading-relaxed text-white/80 max-w-3xl">
            Desarrollador Web Full Stack
            <br className="hidden sm:block" />
            Apasionado del deporte, la tecnología y los retos creativos
            <br className="hidden sm:block" />
            Diseño y desarrollo soluciones web modernas, funcionales y seguras
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            >
              Conoce más sobre mí
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-800 transition-all duration-300 font-semibold text-sm sm:text-base cursor-pointer"
            >
              Ver mis proyectos
            </button>
          </div>
          
          <div className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl mb-4">
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
            <span className="text-white">Almería, España</span>
          </div>
          
          {/* Enlaces de redes sociales */}
          <div className="flex gap-4 sm:gap-6">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/josemaweb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl text-white hover:text-blue-400 transition-colors duration-300"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/Josema1594" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl text-white hover:text-gray-400 transition-colors duration-300"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
