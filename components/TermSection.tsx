import type { Translations } from '@/lib/i18n'
import Link from 'next/link'

interface TermSectionProps {
  t: Translations
  openModal: () => void
}

export default function TermSection({ t, openModal }: TermSectionProps) {
  return (
    <section className="term" id="term-program">
      <div className="term-inner">
        <div className="term-layout">

          <div className="term-text">
            <div className="term-eyebrow">{t.gtLabel}</div>
            <h2 className="term-title">{t.gtTitle}</h2>
            <p className="term-tagline">{t.gtTagline}</p>
            <div className="term-features">
              {([t.gtF1, t.gtF2, t.gtF3, t.gtF4] as string[]).map((f) => (
                <span key={f} className="term-feature">{f}</span>
              ))}
            </div>
            <p className="term-note">{t.gtNote}</p>
            <div className="term-actions">
              <button onClick={openModal} className="term-cta">{t.gtCta}</button>
              <Link href="/group-sessions" className="term-learn">{t.gtLearn}</Link>
            </div>
          </div>

          <div className="term-card">
            <div className="term-card-header">Term 3 · 2026</div>
            <div className="term-card-body">
              <div className="term-card-num">18</div>
              <div className="term-card-month">July</div>
            </div>
            <div className="term-card-footer">9 Weeks · Every Saturday</div>
          </div>

        </div>
      </div>
    </section>
  )
}
