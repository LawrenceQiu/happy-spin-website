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

        <a href="https://www.instagram.com/happyspin.tt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-social-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
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
