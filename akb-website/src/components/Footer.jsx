import { Mail } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

const emailAddress = 'akb.service@outlook.de'

function InstagramLogo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z"
      />
    </svg>
  )
}

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
          <InstagramLogo />
        </a>

        <a
          className="footer-icon-link"
          href={`mailto:${emailAddress}`}
          aria-label={t('footer.email')}
          title={emailAddress}
        >
          <Mail size={22} strokeWidth={2.2} />
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
