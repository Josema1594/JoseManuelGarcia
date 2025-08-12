import React from 'react';
import { SiAngular, SiReact, SiSymfony, SiTailwindcss, SiJavascript, SiTypescript, SiPhp, SiHtml5, SiCss3, SiGit } from 'react-icons/si';
import { Trans, useTranslation } from 'react-i18next'

const About = () => {
  // Lista de tecnologías con sus iconos
  const techIcons = [
    { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'Symfony', Icon: SiSymfony, color: '#000000' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
    { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
    { name: 'Git', Icon: SiGit, color: '#F05032' }
  ];

  const { t } = useTranslation()

  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-slate-50"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-6 sm:mb-12 lg:mb-16 text-slate-800">
          {t('about.heading')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Contenido de texto */}
          <div className="space-y-3 lg:space-y-8 order-2 lg:order-1 text-left lg:text-left lg:pl-24 max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 lg:max-w-none lg:px-0">
            <div className="prose prose-sm lg:prose-base max-w-none">
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mb-2 lg:mb-4">
                <Trans i18nKey="about.p1" components={{ b: <span className="font-semibold" /> }} />
              </p>
              
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mb-2 lg:mb-4">
                <Trans i18nKey="about.p2" components={{ b: <span className="font-semibold" /> }} />
              </p>
              
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mb-2 lg:mb-4">
                <Trans i18nKey="about.p3" components={{ b: <span className="font-semibold" /> }} />
              </p>
              
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mb-2 lg:mb-4">
                <Trans i18nKey="about.p4" components={{ b: <span className="font-semibold" /> }} />
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
          <h3 className="text-base sm:text-lg font-semibold text-slate-800">{t('about.skills')}</h3>
          <ul className="mx-auto max-w-3xl grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2.5 sm:gap-3 justify-items-center list-none p-0">
            {techIcons.map(({ name, Icon: TechIcon, color }) => (
              <li
                key={name}
                title={name}
                className="group flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-sm px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-sm hover:shadow-md transition-all duration-200 transform-gpu hover:-translate-y-0.5"
              >
                {React.createElement(TechIcon, {
                  className: "w-5 h-5 sm:w-6 sm:h-6 drop-shadow-[0_1px_1px_rgba(0,0,0,0.12)]",
                  style: { color },
                  'aria-hidden': true,
                })}
                <span className="hidden md:inline text-[13px] sm:text-sm font-medium text-slate-700">{name}</span>
                <span className="sr-only">{name}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA Buttons - Centrados en la página (eliminado) */}
        {/* Se han retirado los botones de CTA según solicitud */}
      </div>
    </section>
  );
};

export default About;