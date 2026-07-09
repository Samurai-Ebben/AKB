// Company information and service locations.
function AboutSection({ t }) {
  return (
    <section id="about">
      <div className="section-inner about-content">
        <p className="eyebrow">{t('about.eyebrow')}</p>
        <h2>{t('about.title')}</h2>
        <p className="about-text">{t('about.body')}</p>

        <h3 className="locations-title">{t('about.locations')}</h3>
        <div className="locations-grid">
          <article className="location-card">
            <h4>{t('about.munich')}</h4>
            <p>{t('about.munichRegion')}</p>
          </article>
          <article className="location-card">
            <h4>{t('about.chemnitz')}</h4>
            <p>{t('about.chemnitzRegion')}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
