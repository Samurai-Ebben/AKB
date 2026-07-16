function LanguageSwitcher({ t, i18n, currentLanguage }) {
  return (
    <div className="language-switcher" role="group" aria-label={t('language.label')}>
      <button
        type="button"
        className={currentLanguage === 'en' ? 'active' : ''}
        aria-label={t('language.english')}
        aria-pressed={currentLanguage === 'en'}
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </button>

      <button
        type="button"
        className={currentLanguage === 'de' ? 'active' : ''}
        aria-label={t('language.german')}
        aria-pressed={currentLanguage === 'de'}
        onClick={() => i18n.changeLanguage('de')}
      >
        DE
      </button>
    </div>
  )
}

export default LanguageSwitcher