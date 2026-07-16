import LanguageSwitcher from "./LanguageSwitcher"
import { FaInstagram } from 'react-icons/fa'

// Footer links are placeholders for now.
// Replace the URLs when the client gives you the real Instagram/MyHammer links.
function Footer({ t, i18n, currentLanguage }) {
  return (
    <footer className="footer">
      <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>

      <div className="footer-links">
        <a
          className="footer-icon-link"
          href="https://www.instagram.com/akb.service.1?igsh=b3J5aWh6NGdmZzJ5&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('footer.instagram')}
        >
          <FaInstagram size={22} />
        </a>

        {/* <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
          {t('footer.myHammer')}
        </a> */}
        <LanguageSwitcher t={t} i18n={i18n} currentLanguage={currentLanguage} />

      </div>
    </footer>
  )
}

export default Footer
