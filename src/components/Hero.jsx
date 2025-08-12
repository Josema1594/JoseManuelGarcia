import React, { useState, useEffect, useRef } from 'react';
import { DocumentArrowDownIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  // Nuevo: estado y ref para el menú CV
  const [cvMenuOpen, setCvMenuOpen] = useState(false);
  const cvMenuRef = useRef(null);
  const { t } = useTranslation()

  const fullText = t('hero.title');

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && text !== fullText) {
        setText(fullText.slice(0, text.length + 1));
        setTypingSpeed(80);
      } else if (isDeleting && text !== '') {
        setText(fullText.slice(0, text.length - 1));
        setTypingSpeed(80);
      } else if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, typingSpeed, loopIndex, fullText]);

  // Reiniciar el efecto de tipeo al cambiar el idioma/texto
  useEffect(() => {
    setText('');
    setIsDeleting(false);
    setLoopIndex(0);
  }, [fullText]);

  // Nuevo: cerrar menú al hacer clic fuera
  useEffect(() => {
    const onClickOutside = (e) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(e.target)) {
        setCvMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative"
    >
      {/* Fondo fijo para parallax también en móvil */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-no-repeat bg-center sm:bg-right"
        style={{
          backgroundImage: `url('/header.jpg')`
        }}
      />

      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Ubicación fija abajo a la derecha */}
      <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20">
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full px-3 py-1.5">
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path 
              fillRule="evenodd" 
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
              clipRule="evenodd" 
            />
          </svg>
          <span className="text-xs sm:text-sm">{t('hero.location')}</span>
        </div>
      </div>
      
      <div className="relative z-10 text-left max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:ml-100">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-medium mb-5 sm:mb-3 leading-tight text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {t('hero.name')}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mb-6 sm:mb-8 leading-relaxed text-white" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            {text}
            <span className="blinking-cursor">|</span>
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-8 sm:mb-2 leading-relaxed text-white/80 max-w-3xl">
            {t('hero.subtitle1')}
            <br className="hidden sm:block" />
            {t('hero.subtitle2')}
            <br className="hidden sm:block" />
            {t('hero.subtitle3')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            >
              {t('hero.cta')}
            </button>
          </div>

          {/* Reemplazo: un solo botón CV con menú de opciones */}
          <div className="flex justify-center sm:justify-start mb-6 sm:mb-8">
            <div className="relative" ref={cvMenuRef}>
              <button
                onClick={() => setCvMenuOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={cvMenuOpen}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                {t('nav.cv')}
              </button>

              {/* Menú desplegable */}
              <div
                className={`absolute mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all duration-150 origin-top z-30 ${cvMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} left-1/2 -translate-x-1/2 w-[90vw] max-w-xs sm:left-0 sm:translate-x-0 sm:w-60`}
              >
                <a
                  href="/Cv_JoseManuelGarcia.pdf"
                  download="Cv_JoseManuelGarcia.pdf"
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50 cursor-pointer"
                  onClick={() => setCvMenuOpen(false)}
                >
                  <DocumentArrowDownIcon className="w-5 h-5 text-slate-700" />
                  <span className="font-medium">{t('cv.download')}</span>
                </a>
                <a
                  href="/Cv_JoseManuelGarcia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50 cursor-pointer"
                  onClick={() => setCvMenuOpen(false)}
                >
                  <EyeIcon className="w-5 h-5 text-slate-700" />
                  <span className="font-medium">{t('cv.viewOnline')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
