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
          </div>
      </div>
    </section>
  );
};

export default Hero;
