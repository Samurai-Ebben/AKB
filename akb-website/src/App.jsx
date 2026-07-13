import { useTranslation } from 'react-i18next'
import './App.css'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
// import WorkSection from './components/WorkSection'
import WhyChooseUsSection from './components/WhyChooseUs'

function App() {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage?.split('-')[0] || 'en'

  return (
    <>
      <Header t={t} i18n={i18n} currentLanguage={currentLanguage} />

      <main>
        <Hero t={t} />
        <ServicesSection t={t} />
        {/* <WorkSection t={t} /> */}
        <WhyChooseUsSection t={t} />
        <AboutSection t={t} />
      </main>

      <Footer t={t} />
    </>
  )
}

export default App
