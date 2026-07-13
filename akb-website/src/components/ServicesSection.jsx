import {
  Wrench,
  Sparkles,
  Leaf,
  PackageOpen,
  Hammer,
  Layers3,
  Construction,
  Pickaxe,
  Truck,
  Cctv,
} from 'lucide-react'

import SectionHeading from './SectionHeading'
import { serviceIds } from '../data/services'

const serviceIcons = {
  maintenance: Wrench,
  stairwell: Sparkles,
  garden: Leaf,
  clearance: PackageOpen,
  assembly: Hammer,
  flooring: Layers3,
  drywall: Construction,
  demolition: Pickaxe,
  transport: Truck,
  technical: Cctv,
}

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
            const Icon = serviceIcons[id]
            const title = t(`services.items.${id}.title`)

            return (
                <li className="service-card" key={id}>
                  <div className="service-card-content">
                    <div className="service-icon" aria-hidden="true">
                      <Icon size={30} strokeWidth={2.2} />
                    </div>

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
