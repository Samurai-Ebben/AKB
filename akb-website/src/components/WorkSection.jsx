import SectionHeading from './SectionHeading'
import ProjectGallery from './ProjectGallery'
import { beforeAfterProjects, selectedProjects } from '../data/projects'

// Work showcase section.
// It has two galleries: selected work and before/after examples.
function WorkSection({ t }) {
  return (
    <section id="work">
      <div className="section-inner">
        <SectionHeading
          eyebrow={t('work.eyebrow')}
          title={t('work.title')}
          intro={t('work.intro')}
        />

        <div className="work-group">
          <div className="work-subheading">
            <h3>{t('work.selected.title')}</h3>
            <p>{t('work.selected.intro')}</p>
          </div>

          <ProjectGallery projects={selectedProjects} t={t} />
        </div>

        <div className="work-group">
          <div className="work-subheading">
            <h3>{t('work.beforeAfter.title')}</h3>
            <p>{t('work.beforeAfter.intro')}</p>
          </div>

          <ProjectGallery projects={beforeAfterProjects} beforeAfter t={t} />
        </div>
      </div>
    </section>
  )
}

export default WorkSection
