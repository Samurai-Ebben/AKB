import LanguageSwitcher from "./LanguageSwitcher"
// Footer links are placeholders for now.
// Replace the URLs when the client gives you the real Instagram/MyHammer links.
function Footer({ t, i18n, currentLanguage }) {
  return (
    <footer className="footer">
      <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>

      <div className="footer-links">
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          {t('footer.instagram')}
        </a>
        <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
          {t('footer.myHammer')}
        </a>
        <LanguageSwitcher t={t} i18n={i18n} currentLanguage={currentLanguage} />

      </div>
    </footer>
  )
}

export default Footer
