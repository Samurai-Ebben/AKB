import { useEffect, useState } from 'react'
import akbLogo from '../assets/AKBLogo_transparent.png'
import LanguageSwitcher from './LanguageSwitcher'

// Top navigation and language switcher.
// Add future page links here when the website grows.
function Header({ t, i18n, currentLanguage }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
  let lastScrollY = window.scrollY
  let scrollUpDistance = 0
  const showHeaderAfter = 220

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    const scrollDifference = currentScrollY - lastScrollY

    if (currentScrollY < 180) {
      setIsHeaderVisible(true)
      scrollUpDistance = 0
    } else if (scrollDifference > 0) {
      setIsHeaderVisible(false)
      scrollUpDistance = 0
    } else if (scrollDifference < 0) {
      scrollUpDistance += Math.abs(scrollDifference)

      if (scrollUpDistance > showHeaderAfter) {
        setIsHeaderVisible(true)
      }
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

        <LanguageSwitcher t={t} i18n={i18n} currentLanguage={currentLanguage} />
      </div>
    </header>
  )
}

export default Header
