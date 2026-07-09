// Footer links are placeholders for now.
// Replace the URLs when the client gives you the real Instagram/MyHammer links.
function Footer({ t }) {
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
      </div>
    </footer>
  )
}

export default Footer
