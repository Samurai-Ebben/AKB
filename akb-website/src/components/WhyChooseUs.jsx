import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import balconyDecking from '../assets/work/balcony-decking.jpeg'
import houseBuilding from '../assets/work/hus_built.jpeg'
import solarPlacement from '../assets/work/solcelPlacering.jpeg'
import solarPlacementTwo from '../assets/work/solcelPlacering2.jpeg'

const whyImageGroups = {
  reliable: [balconyDecking, houseBuilding],
  flexible: [solarPlacement, solarPlacementTwo],
}

function FadingImage({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 6200)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [images.length])

  return (
    <div className="fading-image">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={index === activeIndex ? alt : ''}
          className={index === activeIndex ? 'active' : ''}
          aria-hidden={index !== activeIndex}
        />
      ))}
    </div>
  )
}

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
            <FadingImage
              images={whyImageGroups.reliable}
              alt={t('why.items.reliable.alt')}
            />

            <div className="why-card-content">
              <h3>{t('why.items.reliable.title')}</h3>
              <p>{t('why.items.reliable.description')}</p>
            </div>
          </article>

          <article className="why-card why-card-reversed">
            <FadingImage
              images={whyImageGroups.flexible}
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
