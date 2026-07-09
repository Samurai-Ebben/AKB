import { useEffect, useState } from 'react'
import akbLogo from '../assets/AKBLogo_transparent.png'

// Top navigation and language switcher.
// Add future page links here when the website grows.
function Header({ t, i18n, currentLanguage }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
  let lastScrollY = window.scrollY

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY < 80) {
      setIsHeaderVisible(true)
    } else if (currentScrollY > lastScrollY) {
      setIsHeaderVisible(false)
    } else {
      setIsHeaderVisible(true)
    }

    lastScrollY = currentScrollY
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

  return (
    <header className={`site-header ${isHeaderVisible ? '' : 'site-header-hidden'}`}>
      <a className="brand" href="#home" aria-label={t('brandHomeLabel')}>
        <img src={akbLogo} alt="" />
      </a>

      <div className="header-controls">
        <nav className="navbar" aria-label={t('nav.label')}>
          <a href="#home">{t('nav.home')}</a>
          <a href="#services">{t('nav.services')}</a>
          <a href="#work">{t('nav.work')}</a>
          <a href="#about">{t('nav.about')}</a>
        </nav>

        <div className="language-switcher" role="group" aria-label={t('language.label')}>
          <button
            type="button"
            className={currentLanguage === 'en' ? 'active' : ''}
            aria-label={t('language.english')}
            aria-pressed={currentLanguage === 'en'}
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={currentLanguage === 'de' ? 'active' : ''}
            aria-label={t('language.german')}
            aria-pressed={currentLanguage === 'de'}
            onClick={() => i18n.changeLanguage('de')}
          >
            DE
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
