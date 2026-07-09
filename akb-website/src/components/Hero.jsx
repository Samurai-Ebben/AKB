import akbLogo from '../assets/AKBLogo_transparent.png'

// First section visitors see.
// Keep the call-to-action button pointed to the most important next section.
function Hero({ t }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">{t('hero.eyebrow')}</p>
        <h1>
          <img className="hero-logo" src={akbLogo} alt={t('hero.title')} />
        </h1>
        <p className="hero-text">{t('hero.description')}</p>
        <a className="primary-button" href="#services">
          {t('hero.button')}
        </a>
      </div>
    </section>
  )
}

export default Hero
