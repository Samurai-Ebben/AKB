import { useRef } from 'react'

function ProjectCard({ image, title, alt, label }) {
  return (
    <li className="work-card">
      <img src={image} alt={alt} loading="lazy" />
      <div className="work-card-content">
        {label && <span>{label}</span>}
        <h4>{title}</h4>
      </div>
    </li>
  )
}

// Horizontal scrolling gallery with arrow controls.
// Reuse this component for any future image carousel.
function ProjectGallery({ projects, beforeAfter = false, t }) {
  const railRef = useRef(null)

  const scrollGallery = (direction) => {
    const rail = railRef.current

    if (!rail) return

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.85,
      behavior: 'smooth',
    })
  }

  return (
    <div className="gallery">
      <div className="gallery-toolbar">
        <p>{t('work.gallery.hint')}</p>
        <div className="gallery-controls">
          <button
            type="button"
            aria-label={t('work.gallery.previous')}
            onClick={() => scrollGallery(-1)}
          >
            &larr;
          </button>
          <button
            type="button"
            aria-label={t('work.gallery.next')}
            onClick={() => scrollGallery(1)}
          >
            &rarr;
          </button>
        </div>
      </div>

      <ul
        className={`work-rail${beforeAfter ? ' work-rail-before-after' : ''}`}
        ref={railRef}
      >
        {projects.map(({ id, image }) => (
          <ProjectCard
            key={id}
            image={image}
            title={t(`work.projects.${id}.title`)}
            alt={t(`work.projects.${id}.alt`)}
            label={beforeAfter ? t('work.beforeAfter.label') : undefined}
          />
        ))}
      </ul>
    </div>
  )
}

export default ProjectGallery
