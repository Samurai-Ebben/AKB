import SectionHeading from './SectionHeading'

function WhyChooseUsSection({ t }) {
  return (
    <section id="work" className="why-section">
      <div className="section-inner">
        <SectionHeading
          eyebrow={t('why.eyebrow')}
          title={t('why.title')}
          intro={t('why.intro')}
        /><div className="why-grid">
          <article className="why-card">
            <img
              src="src/assets/work/balcony-decking.jpeg"
              alt={t('why.items.reliable.alt')}
            />

            <div className="why-card-content">
              <h3>{t('why.items.reliable.title')}</h3>
              <p>{t('why.items.reliable.description')}</p>
            </div>
          </article>

          <article className="why-card why-card-reversed">
            <img
              src="/src/assets/work/technical-installation.jpeg"
              alt={t('why.items.flexible.alt')}
            />

            <div className="why-card-content">
              <h3>{t('why.items.flexible.title')}</h3>
              <p>{t('why.items.flexible.description')}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection