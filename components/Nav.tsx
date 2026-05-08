import type { Translations } from '@/lib/i18n'
import type { Lang } from '@/lib/i18n'
import Image from 'next/image'

interface NavProps {
  t: Translations
  lang: Lang
  setLang: (l: Lang) => void
  openModal: () => void
  onMenuOpen: () => void
}

export default function Nav({ t, lang, setLang, openModal, onMenuOpen }: NavProps) {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Image src="/logo.png" alt="Happy Spin Logo" width={48} height={48} priority />
        <div className="nav-brand">
          Happy Spin
          <span>Table Tennis Academy</span>
        </div>
      </div>

      <div className="nav-links">
        <a href="#about">{t.navAbout}</a>
        <a href="#programs">{t.navPrograms}</a>
        <a href="#schedule">{t.navSchedule}</a>
        <a href="#access">{t.navAccess}</a>
        <a href="#faq">{t.navFaq}</a>

        <div
          role="group"
          aria-label="Language"
          style={{
            display: 'inline-flex', alignItems: 'center', padding: '3px',
            border: '1.5px solid #E5E7EB', borderRadius: '50px', background: 'white',
          }}
        >
          {([['en', 'EN'], ['zh', '中文']] as [Lang, string][]).map(([v, l]) => (
            <button
              key={v}
              type="button"
              aria-pressed={lang === v}
              onClick={() => setLang(v)}
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '12px', fontWeight: 700, letterSpacing: '.04em',
                padding: '5px 12px', borderRadius: '50px', border: 'none', cursor: 'pointer',
                background: lang === v ? 'var(--navy)' : 'transparent',
                color: lang === v ? 'white' : 'var(--navy)',
                transition: 'background .18s, color .18s',
              }}
            >
              {l}
            </button>
          ))}
        </div>

        <button className="btn-nav" onClick={openModal}>{t.bookTrial}</button>
      </div>

      <button className="nav-mobile-btn" onClick={onMenuOpen} aria-label="Open menu">
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
      </button>
    </nav>
  )
}
