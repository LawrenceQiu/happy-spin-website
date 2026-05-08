import type { Translations } from '@/lib/i18n'
import type { Lang } from '@/lib/i18n'

interface MobileMenuProps {
  t: Translations
  lang: Lang
  setLang: (l: Lang) => void
  open: boolean
  onClose: () => void
  openModal: () => void
}

export default function MobileMenu({ t, lang, setLang, open, onClose, openModal }: MobileMenuProps) {
  function handleLink(href: string) {
    onClose()
    // Let the browser handle anchor navigation after menu closes
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button className="mobile-close" onClick={onClose} aria-label="Close menu">✕</button>

      {(['#about', '#programs', '#schedule', '#access', '#faq'] as const).map((href) => {
        const labels: Record<string, string> = {
          '#about': t.navAbout,
          '#programs': t.navPrograms,
          '#schedule': t.navSchedule,
          '#access': t.navAccess,
          '#faq': t.navFaq,
        }
        return (
          <a key={href} href={href} onClick={(e) => { e.preventDefault(); handleLink(href) }}>
            {labels[href]}
          </a>
        )
      })}

      <div
        role="group"
        aria-label="Language"
        style={{
          display: 'inline-flex', alignItems: 'center', padding: '4px',
          border: '1.5px solid rgba(255,255,255,.3)', borderRadius: '50px',
          background: 'rgba(255,255,255,.08)',
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
              fontSize: '14px', fontWeight: 700, letterSpacing: '.04em',
              padding: '8px 18px', borderRadius: '50px', border: 'none', cursor: 'pointer',
              background: lang === v ? 'var(--orange)' : 'transparent',
              color: 'white', transition: 'background .18s',
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <button
        className="btn-primary"
        style={{ fontSize: '18px', padding: '16px 40px' }}
        onClick={() => { onClose(); openModal() }}
      >
        {t.bookTrial}
      </button>
    </div>
  )
}
