import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

const navItems = [
  { id: 'hero', label: 'nav.home', href: '#hero' },
  { id: 'about', label: 'nav.about', href: '#about' },
  { id: 'projects', label: 'nav.projects', href: '#projects' },
  { id: 'education', label: 'nav.education', href: '#education' },
  { id: 'contact', label: 'nav.contact', href: '#contact' },
  { id: 'cv', label: 'nav.cv', href: '#cv' }
]

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const langRef = useRef(null)
  const { t, i18n } = useTranslation()

  // Efecto para detectar la sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
      const scrollPosition = window.scrollY + 100 // Offset para mejor detección

      let currentSection = 'hero'

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id
          }
        }
      })

      setActiveSection(currentSection)
    }

    // Ejecutar al cargar la página
    handleScroll()

    // Añadir listener de scroll
    window.addEventListener('scroll', handleScroll)

    // Limpiar listener al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Cerrar selector de idioma al hacer clic fuera
  useEffect(() => {
    const onDocClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  // Sincroniza el atributo lang del documento cuando cambie el idioma
  useEffect(() => {
    const lng = (i18n.language || 'es').slice(0, 2)
    document.documentElement.lang = lng
  }, [i18n.language])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false) // Cerrar menú móvil al hacer clic
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const changeLang = (lng) => {
    i18n.changeLanguage(lng)
    document.documentElement.lang = lng
    try { localStorage.setItem('i18nextLng', lng) } catch { /* ignore */ }
    setLangMenuOpen(false)
  }

  const currentShort = (i18n.language || 'es').slice(0,2).toUpperCase()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2 md:pt-4 px-4 opacity-100">
      <div className="flex justify-between items-center">
        {/* Language Switcher - Unificado */}
        <div className="relative lg:ml-4" ref={langRef}>
          <button
            onClick={() => setLangMenuOpen(v => !v)}
            aria-haspopup="listbox"
            aria-expanded={langMenuOpen}
            className="flex items-center gap-2 bg-white/30 backdrop-blur-md rounded-2xl px-3 py-1.5 border border-gray-200/50 text-gray-700 cursor-pointer hover:bg-white/40"
          >
            <GlobeAltIcon className="w-5 h-5 text-gray-700" />
            <span className="text-xs font-semibold">{currentShort}</span>
            <svg className={`w-4 h-4 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          <div
            className={`absolute mt-2 w-28 bg-white/80 backdrop-blur-md rounded-xl border border-gray-200/50 py-1 shadow-lg ${langMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity`}
          >
            {['es','en','fr'].map(lng => (
              <button
                key={lng}
                onClick={() => changeLang(lng)}
                className={`w-full text-left px-3 py-2 text-xs font-medium tracking-wide cursor-pointer ${i18n.language?.startsWith(lng) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'}`}
                role="option"
                aria-selected={i18n.language?.startsWith(lng)}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          {/* Desktop Navigation */}
          <nav className="hidden lg:block bg-white/30 backdrop-blur-md rounded-2xl px-4 xl:px-6 py-2 xl:py-3 border border-gray-200/50">
            <ul className="flex items-center space-x-3 xl:space-x-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                    px-2 xl:px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duración-300 rounded-lg whitespace-nowrap cursor-pointer
                    ${activeSection === item.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'
                    }
                  `}
                  >
                    {t(item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile/Tablet Navigation */}
          <div className="lg:hidden">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-white/30 backdrop-blur-md rounded-xl p-2 border border-gray-200/50 text-gray-700 cursor-pointer"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="absolute top-16 right-4 w-56 bg-white/70 backdrop-blur-md rounded-xl border border-gray-200/50 py-3 shadow-lg">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`
                        w-full text-left px-4 py-2 text-sm font-medium tracking-wide transition-all duración-300 cursor-pointer
                        ${activeSection === item.id
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'
                        }
                      `}
                      >
                        {t(item.label)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
