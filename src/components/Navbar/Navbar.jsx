import { useState, useEffect, useCallback } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    
    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    
    setLastScrollY(currentScrollY)
    setScrolled(currentScrollY > 50)
    
    const sections = ['hero', 'sobre', 'servicos', 'contato']
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  const toggleMenu = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  return (
    <header className={`
      ${styles.header} 
      ${scrolled ? styles.scrolled : ''} 
      ${hidden && !open ? styles.hidden : ''}
    `}>
      <div className={styles.glow} />
      
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          <img src="/logo.webp" alt="Base Firme" className={styles.logoImg} />
        </a>

        <nav className={styles.desktopNav}>
          {links.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
            >
              {link.label}
              <span className={styles.navIndicator} />
            </a>
          ))}
        </nav>

        <a href="#contato" className={styles.cta}>
          <span>Orçamento</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${open ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <img src="/logo.webp" alt="Base Firme" className={styles.drawerLogo} />
          <button 
            className={styles.drawerClose} 
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        
        <nav className={styles.drawerNav}>
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={closeMenu}
              style={{ '--i': i + 1 }}
            >
              <span className={styles.drawerLinkNum}>0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className={styles.drawerFooter}>
          <a href="#contato" className={styles.drawerCta} onClick={closeMenu}>
            Solicitar Orçamento
          </a>
          <a href="https://wa.me/5541998060564" target="_blank" rel="noopener noreferrer" className={styles.drawerPhone}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            (41) 9 9806-0564
          </a>
        </div>
      </div>
    </header>
  )
}