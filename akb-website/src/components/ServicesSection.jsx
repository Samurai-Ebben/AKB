import SectionHeading from './SectionHeading'
import { serviceIds, serviceImages } from '../data/services'

// Services grid.
// Text comes from translation files. Images are matched automatically by service ID.
function ServicesSection({ t }) {
  return (
    <section id="services">
      <div className="section-inner">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          intro={t('services.intro')}
        />

        <ul className="services-grid">
          {serviceIds.map((id) => {
            const image = serviceImages[id]
            const title = t(`services.items.${id}.title`)

            return (
              <li className={`service-card${image ? ' has-image' : ''}`} key={id}>
                {/* {image && (
                  <img
                    className="service-card-image"
                    src={image}
                    alt={t('services.imageAlt', { service: title })}
                    loading="lazy"
                  />
                )} */}
                <div className="service-card-content">
                  <h3>{title}</h3>
                  <p>{t(`services.items.${id}.description`)}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ServicesSection
