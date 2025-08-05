import { useState, useEffect } from 'react'

const navItems = [
  { id: 'hero', label: 'INICIO', href: '#hero' },
  { id: 'about', label: 'SOBRE MÍ', href: '#about' },
  { id: 'projects', label: 'PROYECTOS', href: '#projects' },
  { id: 'education', label: 'EDUCACIÓN', href: '#education' },
  { id: 'contact', label: 'CONTACTO', href: '#contact' },
  { id: 'cv', label: 'CV', href: '#cv' }
]

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false) // Cerrar menú móvil al hacer clic
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2 md:pt-4 px-4 opacity-100">
      <div className="flex justify-end">
        {/* Desktop Navigation */}
        <nav className="hidden lg:block bg-white/30 backdrop-blur-md rounded-2xl px-4 xl:px-6 py-2 xl:py-3 border border-gray-200/50">
          <ul className="flex items-center space-x-3 xl:space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    px-2 xl:px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-300 rounded-lg whitespace-nowrap cursor-pointer
                    ${activeSection === item.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'
                    }
                  `}
                >
                  {item.label}
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
                        w-full text-left px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer
                        ${activeSection === item.id
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'
                        }
                      `}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
